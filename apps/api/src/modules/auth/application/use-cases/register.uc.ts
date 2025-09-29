import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express'
import { RegisterDto } from 'src/modules/auth/application/dtos/register.dto'
import { CookieService } from 'src/modules/auth/application/services/cookies.service'
import { PasswordService } from 'src/modules/auth/application/services/password.service'
import { UserRepository } from 'src/modules/users/infrastructure/repositories/user.repository'

@Injectable()
export class RegisterUc {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
    private readonly cookieService: CookieService,
  ) {}

  async execute(dto: RegisterDto, res: Response) {
    const existingEmail = await this.userRepository.findByEmail(dto.email)
    if (existingEmail) {
      throw new BadRequestException('Email déjà utilisé')
    }

    const existingUserName = await this.userRepository.findByUserName(dto.userName)
    if (existingUserName) {
      throw new BadRequestException("Nom d'utilisateur déjà utilisé")
    }

    const password = await this.passwordService.hash(dto.password)
    const user = await this.userRepository.create({ ...dto, password })

    const token = await this.jwtService.signAsync({ userId: user.userId })
    this.cookieService.setSessionCookie(res, token)

    return user
  }
}
