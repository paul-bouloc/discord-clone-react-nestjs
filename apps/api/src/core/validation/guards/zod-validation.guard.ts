import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Request } from 'express'
import { ZodError, ZodType } from 'zod'
import {
  ZOD_SCHEMAS_KEY,
  ZOD_SCHEMA_KEY,
  ZOD_TARGET_KEY,
  ZodTarget,
  ZodValidationEntry,
} from '../decorators/zod-validate.decorator'

@Injectable()
export class ZodValidationGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>()
    const schema = this.reflector.get<ZodType | undefined>(ZOD_SCHEMA_KEY, context.getHandler())
    const target = this.reflector.get<ZodTarget | undefined>(ZOD_TARGET_KEY, context.getHandler()) ?? 'body'
    const entries =
      this.reflector.get<ZodValidationEntry[] | undefined>(ZOD_SCHEMAS_KEY, context.getHandler()) ??
      (schema ? [{ schema, target }] : [])

    if (!entries.length) return true

    try {
      for (const entry of entries) {
        const source =
          entry.target === 'query'
            ? (request.query as unknown)
            : entry.target === 'params'
              ? (request.params as unknown)
              : (request.body as unknown)
        const validatedData = entry.schema.parse(source)
        if (entry.target === 'query') request.query = validatedData as Record<string, any>
        else if (entry.target === 'params') request.params = validatedData as Record<string, any>
        else request.body = validatedData as Record<string, any>
      }
      return true
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.issues.map((err) => err.message).join('. ')
        throw new BadRequestException(`Validation failed: ${errorMessages}`)
      }
      throw new BadRequestException('Validation failed')
    }
  }
}
