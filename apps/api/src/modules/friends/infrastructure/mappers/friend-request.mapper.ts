import { Injectable } from '@nestjs/common'
import { FriendRequestStatus, FriendRequest as PrismaFriendRequest, User as PrismaUser } from 'generated/prisma'
import { FriendRequestId, UserId } from 'src/core/types'
import { FriendRequest } from 'src/modules/friends/domain/types'
import { UserMapper } from 'src/modules/users/infrastructure/mappers/user.mapper'

type PrismaFriendRequestWithUsers = PrismaFriendRequest & {
  requester?: PrismaUser
  addressee?: PrismaUser
}

@Injectable()
export class FriendRequestMapper {
  constructor(private readonly userMapper: UserMapper) {}

  toDomain(friendRequest: PrismaFriendRequestWithUsers, opts?: { withUsers?: boolean }): FriendRequest {
    const domain: FriendRequest = {
      friendRequestId: friendRequest.friendRequestId as FriendRequestId,
      requesterId: friendRequest.requesterId as UserId,
      addresseeId: friendRequest.addresseeId as UserId,
      status: friendRequest.status as FriendRequestStatus,
      createdAt: new Date(friendRequest.createdAt),
      updatedAt: new Date(friendRequest.updatedAt),
    }

    if (opts?.withUsers) {
      if (friendRequest.requester) {
        domain.requester = this.userMapper.toDomain(friendRequest.requester)
      }
      if (friendRequest.addressee) {
        domain.addressee = this.userMapper.toDomain(friendRequest.addressee)
      }
    }

    return domain
  }
}

