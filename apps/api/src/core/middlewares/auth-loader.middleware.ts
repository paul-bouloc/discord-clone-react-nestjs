// src/http/middlewares/auth-loader.middleware.ts
import { Inject, Injectable, NestMiddleware } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { NextFunction, Request, Response } from 'express'
import { appConfig } from 'src/core/config/app.config'
import { UserId } from 'src/core/types'
import { CookieService } from 'src/modules/auth/application/services/cookies.service'
import { UserRepository } from 'src/modules/users/infrastructure/repositories/user.repository'

@Injectable()
export class AuthLoaderMiddleware implements NestMiddleware {
  constructor(
    private readonly users: UserRepository,
    private readonly jwt: JwtService,
    private readonly cookies: CookieService,
    @Inject(appConfig.KEY) private readonly cfg: ConfigType<typeof appConfig>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = (req.cookies.sid as string | undefined) ?? this.cookies.readSessionCookie(req)
    if (!token) {
      next()
      return
    }

    try {
      const { userId } = await this.jwt.verifyAsync<{ userId: string }>(token, {
        secret: this.cfg.jwtSecret,
      })
      const user = await this.users.findById(userId as UserId)
      if (user) req.user = user
      else this.cookies.clearSessionCookie(res)
    } catch {
      this.cookies.clearSessionCookie(res)
    }
    next()
  }
}
