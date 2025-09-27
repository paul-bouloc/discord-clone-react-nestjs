import { SetMetadata } from '@nestjs/common'
import { ZodType } from 'zod'

export const ZOD_SCHEMA_KEY = 'zodSchema'
export const ZOD_TARGET_KEY = 'zodTarget'
export const ZOD_SCHEMAS_KEY = 'zodSchemas'

export type ZodTarget = 'body' | 'query' | 'params'
export interface ZodValidationEntry {
  schema: ZodType
  target: ZodTarget
}

export const ZodValidate = (schema: ZodType, target: ZodTarget = 'body'): MethodDecorator => {
  return (targetProto, propertyKey, descriptor) => {
    // Back-compat single metadata
    SetMetadata(ZOD_SCHEMA_KEY, schema)(targetProto, propertyKey, descriptor)
    SetMetadata(ZOD_TARGET_KEY, target)(targetProto, propertyKey, descriptor)

    // Support multiple validations (append to array)
    const meta: unknown = Reflect.getMetadata(ZOD_SCHEMAS_KEY, targetProto, propertyKey)
    let existing: ZodValidationEntry[] = []
    if (Array.isArray(meta)) {
      const typed = (meta as unknown[]).filter((e): e is ZodValidationEntry => {
        const candidate = e as { target?: unknown; schema?: unknown }
        return typeof candidate.target === 'string' && typeof candidate.schema === 'object' && candidate.schema !== null
      })
      existing = typed
    }
    const next: ZodValidationEntry[] = [...existing, { schema, target }]
    SetMetadata(ZOD_SCHEMAS_KEY, next)(targetProto, propertyKey, descriptor)
  }
}
