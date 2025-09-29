import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express'
import { LoginDto } from 'src/modules/auth/application/dtos/login.dto'
import { CookieService } from 'src/modules/auth/application/services/cookies.service'
import { PasswordService } from 'src/modules/auth/application/services/password.service'
import { UserRepository } from 'src/modules/users/infrastructure/repositories/user.repository'

@Injectable()
export class LoginUc {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
    private readonly cookieService: CookieService,
  ) {}

  async execute(dto: LoginDto, res: Response) {
    const user = await this.userRepository.findByEmail(dto.email, {
      withPassword: true,
    })
    if (!user?.password) {
      throw new BadRequestException('Email ou mot de passe invalide')
    }

    const isPasswordValid = await this.passwordService.compare(dto.password, user.password)
    if (!isPasswordValid) {
      throw new BadRequestException('Email ou mot de passe invalide')
    }

    const token = await this.jwtService.signAsync({ userId: user.userId })
    this.cookieService.setSessionCookie(res, token)

    const { password: _password, ...userWithoutPassword } = user

    return userWithoutPassword
  }
}
