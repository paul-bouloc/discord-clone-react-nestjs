import { Injectable } from '@nestjs/common'
import { UserId } from 'src/core/types'
import { UserRepository } from 'src/modules/users/infrastructure/repositories/user.repository'

@Injectable()
export class GetSelfUc {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: UserId) {
    return this.userRepository.findById(userId)
  }
}
