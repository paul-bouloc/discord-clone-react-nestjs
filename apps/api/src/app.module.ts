import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { AuthGuard } from 'src/core/auth/guards/auth.guard'
import appConfig from 'src/core/config/app.config'
import { ZodValidationGuard } from 'src/core/validation'
import { AuthModule } from 'src/modules/auth/auth.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [appConfig],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 1000,
        limit: 20,
      },
    ]),
    JwtModule.register({
      global: true,
      secret: appConfig().jwtSecret,
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule,
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
export class AppModule {}
