import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { FriendRequestId, UserId } from 'src/core/types'
import { FriendRequestStatus } from 'src/modules/friends/domain/types'
import { FriendRequestRepository } from 'src/modules/friends/infrastructure/repositories/friend-request.repository'

@Injectable()
export class RejectFriendRequestUc {
  constructor(private readonly friendRequestRepository: FriendRequestRepository) {}

  async execute(friendRequestId: FriendRequestId, addresseeId: UserId) {
    const friendRequest = await this.friendRequestRepository.findById(friendRequestId)
    if (!friendRequest) {
      throw new NotFoundException('Demande introuvable')
    }
    if (friendRequest.addresseeId !== addresseeId) {
      throw new ForbiddenException('Vous ne pouvez pas refuser cette demande')
    }
    if (friendRequest.status !== FriendRequestStatus.PENDING) {
      throw new BadRequestException('Cette demande ne peut plus être refusée')
    }

    return this.friendRequestRepository.updateStatus(friendRequestId, FriendRequestStatus.REJECTED)
  }
}

