import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { FriendRequestId, UserId } from 'src/core/types'
import { FriendRequestStatus } from 'src/modules/friends/domain/types'
import { FriendRequestRepository } from 'src/modules/friends/infrastructure/repositories/friend-request.repository'

@Injectable()
export class CancelFriendRequestUc {
  constructor(private readonly friendRequestRepository: FriendRequestRepository) {}

  async execute(friendRequestId: FriendRequestId, requesterId: UserId) {
    const friendRequest = await this.friendRequestRepository.findById(friendRequestId)
    if (!friendRequest) {
      throw new NotFoundException('Demande introuvable')
    }
    if (friendRequest.requesterId !== requesterId) {
      throw new ForbiddenException('Vous ne pouvez pas annuler cette demande')
    }
    if (friendRequest.status !== FriendRequestStatus.PENDING) {
      throw new BadRequestException("Seules les demandes en attente peuvent être annulées")
    }

    return this.friendRequestRepository.updateStatus(friendRequestId, FriendRequestStatus.CANCELLED)
  }
}

