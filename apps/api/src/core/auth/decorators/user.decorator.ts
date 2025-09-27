import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'
import { User as UserType } from 'src/modules/users/domain/types'

export const User = createParamDecorator((data: keyof UserType | undefined, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest<Request>()
  return data ? req.user?.[data] : req.user
})
