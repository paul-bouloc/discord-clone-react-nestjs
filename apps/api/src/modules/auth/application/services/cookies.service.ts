import { Injectable } from '@nestjs/common'
import { Request, Response } from 'express'

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

  readSessionCookie(req: Request) {
    return req.cookies.sid as string | undefined
  }

  clearSessionCookie(res: Response) {
    res.clearCookie('sid')
  }
}
