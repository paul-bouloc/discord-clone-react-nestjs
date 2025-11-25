import { Injectable, NotFoundException } from '@nestjs/common'
import { UserId } from 'src/core/types'
import { FriendshipRepository } from 'src/modules/friends/infrastructure/repositories/friendship.repository'

@Injectable()
export class DeleteFriendshipUc {
  constructor(private readonly friendshipRepository: FriendshipRepository) {}

  async execute(userId: UserId, friendId: UserId) {
    const exists = await this.friendshipRepository.existsBetween(userId, friendId)
    if (!exists) {
      throw new NotFoundException('Amitié introuvable')
    }

    await this.friendshipRepository.delete(userId, friendId)

    return { success: true }
  }
}

