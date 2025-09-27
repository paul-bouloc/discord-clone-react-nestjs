import { Injectable } from '@nestjs/common'
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
    const password = await this.passwordService.hash(dto.password)
    const user = await this.userRepository.create({ ...dto, password })
    return user
  }
}
