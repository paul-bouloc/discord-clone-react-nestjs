import { Injectable } from '@nestjs/common'
import { Response } from 'express'

@Injectable()
export class CookieService {
  setSessionCookie(res: Response, secret: string) {
    res.cookie('sid', secret, {
      httpOnly: true,
      secure: true,
      sameSite: true,
      path: '/',
    })
  }

  clearSessionCookie(res: Response) {
    res.clearCookie('sid')
  }
}
