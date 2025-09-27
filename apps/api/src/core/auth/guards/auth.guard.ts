import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Request } from 'express'
import { IS_PUBLIC_KEY } from 'src/core/auth/decorators/public.decorator'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(ctx: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [ctx.getHandler(), ctx.getClass()])
    if (isPublic) {
      return true
    }

    const req = ctx.switchToHttp().getRequest<Request>()
    if (!req.user) {
      throw new UnauthorizedException('You are not authorized to access this resource')
    }

    return true
  }
}
