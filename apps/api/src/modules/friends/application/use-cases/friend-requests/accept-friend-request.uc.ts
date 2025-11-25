import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { FriendRequestId, UserId } from 'src/core/types'
import { FriendRequestStatus } from 'src/modules/friends/domain/types'
import { FriendRequestRepository } from 'src/modules/friends/infrastructure/repositories/friend-request.repository'
import { FriendshipRepository } from 'src/modules/friends/infrastructure/repositories/friendship.repository'

@Injectable()
export class AcceptFriendRequestUc {
  constructor(
    private readonly friendRequestRepository: FriendRequestRepository,
    private readonly friendshipRepository: FriendshipRepository,
  ) {}

  async execute(friendRequestId: FriendRequestId, addresseeId: UserId) {
    const friendRequest = await this.friendRequestRepository.findById(friendRequestId)
    if (!friendRequest) {
      throw new NotFoundException('Demande introuvable')
    }
    if (friendRequest.addresseeId !== addresseeId) {
      throw new ForbiddenException('Vous ne pouvez pas accepter cette demande')
    }
    if (friendRequest.status !== FriendRequestStatus.PENDING) {
      throw new BadRequestException('Cette demande ne peut plus être acceptée')
    }

    await this.friendshipRepository.upsert(friendRequest.requesterId, friendRequest.addresseeId)

    return this.friendRequestRepository.updateStatus(friendRequestId, FriendRequestStatus.ACCEPTED)
  }
}
