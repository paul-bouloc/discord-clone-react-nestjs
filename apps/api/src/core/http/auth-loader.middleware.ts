import { Inject, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { NextFunction, Request, Response } from 'express'
import appConfig from 'src/core/config/app.config'
import { CookieService } from 'src/core/http/cookies.service'
import { UserId } from 'src/core/types'
import { UserRepository } from 'src/modules/users/infrastructure/repositories/user.repository'

@Injectable()
export class AuthLoaderMiddleware implements NestMiddleware {
  constructor(
    private readonly users: UserRepository,
    private readonly jwtService: JwtService,
    @Inject(appConfig) private readonly cfg: ConfigType<typeof appConfig>,
    private readonly cookieService: CookieService,
  ) {}

  async use(req: Request, _res: Response, next: NextFunction) {
    const cookieJwt = req.cookies.sid as string | undefined
    if (!cookieJwt) {
      next()
      return
    }

    try {
      const decoded = await this.jwtService.verifyAsync<{ userId: string }>(cookieJwt, { secret: this.cfg.jwtSecret })
      const user = await this.users.findById(decoded.userId as UserId)
      if (!user) {
        next()
        return
      }

      req.user = user
    } catch (_error) {
      this.cookieService.clearSessionCookie(_res)
      throw new UnauthorizedException('Invalid or expired token')
    }

    next()
  }
}
