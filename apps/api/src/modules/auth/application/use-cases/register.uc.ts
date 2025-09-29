import { BadRequestException, Injectable } from '@nestjs/common'
import { RegisterDto } from 'src/modules/auth/application/dtos/register.dto'
import { PasswordService } from 'src/modules/auth/application/services/password.service'
import { UserRepository } from 'src/modules/users/infrastructure/repositories/user.repository'

@Injectable()
export class RegisterUc {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async execute(dto: RegisterDto) {
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

    return user
  }
}
