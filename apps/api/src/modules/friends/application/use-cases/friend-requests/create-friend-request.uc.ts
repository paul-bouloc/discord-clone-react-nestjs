import { BadRequestException, Injectable } from '@nestjs/common'
import { UserId } from 'src/core/types'
import { FriendRequestStatus } from 'src/modules/friends/domain/types'
import { FriendRequestRepository } from 'src/modules/friends/infrastructure/repositories/friend-request.repository'
import { FriendshipRepository } from 'src/modules/friends/infrastructure/repositories/friendship.repository'
import { AcceptFriendRequestUc } from './accept-friend-request.uc'

@Injectable()
export class CreateFriendRequestUc {
  constructor(
    private readonly friendRequestRepository: FriendRequestRepository,
    private readonly friendshipRepository: FriendshipRepository,
    private readonly acceptFriendRequestUc: AcceptFriendRequestUc,
  ) {}

  async execute(requesterId: UserId, addresseeId: UserId) {
    if (requesterId === addresseeId) {
      throw new BadRequestException('Impossible de vous envoyer une demande à vous-même')
    }

    const friendshipExists = await this.friendshipRepository.existsBetween(requesterId, addresseeId)

    const friendRequest = await this.friendRequestRepository.findByRequesterIdAndAddresseeId(requesterId, addresseeId)
    if (friendRequest) {
      if (friendRequest.status === FriendRequestStatus.PENDING) {
        throw new BadRequestException('Vous avez déjà envoyé une demande à cet utilisateur')
      }
      if (friendRequest.status === FriendRequestStatus.ACCEPTED && friendshipExists) {
        throw new BadRequestException('Vous êtes déjà amis avec cet utilisateur')
      }
    }

    const reverseFriendRequest = await this.friendRequestRepository.findByRequesterIdAndAddresseeId(addresseeId, requesterId)
    if (reverseFriendRequest) {
      if (reverseFriendRequest.status === FriendRequestStatus.PENDING) {
        return this.acceptFriendRequestUc.execute(reverseFriendRequest.friendRequestId, requesterId)
      }
      if (reverseFriendRequest.status === FriendRequestStatus.ACCEPTED && friendshipExists) {
        throw new BadRequestException('Vous êtes déjà amis avec cet utilisateur')
      }
    }

    return this.friendRequestRepository.upsert(requesterId, addresseeId)
  }
}

