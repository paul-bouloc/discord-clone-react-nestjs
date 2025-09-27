import { Logger, ValidationPipe } from '@nestjs/common'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { PrismaExceptionFilter } from 'src/core/filters/prisma-exception.filter'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true, bodyParser: true })
  const { httpAdapter } = app.get(HttpAdapterHost)
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false, transform: true, forbidUnknownValues: true }),
  )

  app.useGlobalFilters(new PrismaExceptionFilter(httpAdapter))

  const port = process.env.PORT ?? 3000
  await app.listen(port)
  Logger.log('--------------------------------')
  Logger.log(new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }))
  Logger.log(`🚀 API is running on: http://localhost:${port}`)
  Logger.log('--------------------------------')
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap()
