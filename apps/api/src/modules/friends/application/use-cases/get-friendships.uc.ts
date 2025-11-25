import { Injectable } from '@nestjs/common'
import { UserId } from 'src/core/types'
import { FriendshipRepository } from 'src/modules/friends/infrastructure/repositories/friendship.repository'

@Injectable()
export class GetFriendshipsUc {
  constructor(private readonly friendshipRepository: FriendshipRepository) {}

  async execute(userId: UserId) {
    return this.friendshipRepository.findManyByUserId(userId)
  }
}
