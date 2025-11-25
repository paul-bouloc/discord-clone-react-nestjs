import { Injectable } from '@nestjs/common'
import { UserId } from 'src/core/types'
import { FriendRequestRepository } from 'src/modules/friends/infrastructure/repositories/friend-request.repository'

@Injectable()
export class GetFriendRequestsUc {
  constructor(private readonly friendRequestRepository: FriendRequestRepository) {}

  async execute(userId: UserId) {
    return this.friendRequestRepository.findManyByUserId(userId)
  }
}

