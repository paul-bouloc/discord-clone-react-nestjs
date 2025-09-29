import { Injectable } from '@nestjs/common'
import { Response } from 'express'
import { CookieService } from 'src/modules/auth/application/services/cookies.service'

@Injectable()
export class LogoutUc {
  constructor(private readonly cookieService: CookieService) {}

  execute(res: Response) {
    this.cookieService.clearSessionCookie(res)
    return { message: 'Déconnexion réussie' }
  }
}
