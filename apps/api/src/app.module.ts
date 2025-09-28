import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule, ConfigType } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { AuthGuard } from 'src/core/auth/guards/auth.guard'
import { appConfig } from 'src/core/config/app.config'
import { AuthLoaderMiddleware } from 'src/core/middlewares/auth-loader.middleware'
import LoggerMiddleware from 'src/core/middlewares/logger.middleware'
import { ZodValidationGuard } from 'src/core/validation'
import { AuthModule } from 'src/modules/auth/auth.module'
import { IdentityModule } from 'src/modules/identity/identity.module'
import { UserModule } from 'src/modules/users/user.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig],
    }),
    JwtModule.registerAsync({
      global: true,
      inject: [appConfig.KEY],
      useFactory: (cfg: ConfigType<typeof appConfig>) => ({
        secret: cfg.jwtSecret,
        signOptions: { expiresIn: '1h' },
      }),
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 1000,
        limit: 20,
      },
    ]),
    AuthModule,
    IdentityModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ZodValidationGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthLoaderMiddleware, LoggerMiddleware).forRoutes('*')
  }
}
