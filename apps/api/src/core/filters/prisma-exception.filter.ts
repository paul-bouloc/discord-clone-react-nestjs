import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { Response } from 'express'
import { Prisma } from 'generated/prisma'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter extends BaseExceptionFilter {
  override catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response | undefined>()

    // Vérifier que response existe avant de l'utiliser
    if (!response) {
      super.catch(exception, host)
      return
    }

    switch (exception.code) {
      case 'P2002': {
        const status = HttpStatus.CONFLICT
        response.status(status).json({
          statusCode: status,
          message: 'Unique constraint failed',
        })
        break
      }
      case 'P2025': {
        const status = HttpStatus.NOT_FOUND
        response.status(status).json({
          statusCode: status,
          message: 'Operation failed because it depends on one or more records that were required but not found.',
        })
        break
      }
      default:
        // default 500 error code
        super.catch(exception, host)
        break
    }
  }
}
