import { Injectable } from '@nestjs/common'
import { Friendship as PrismaFriendship, User as PrismaUser } from 'generated/prisma'
import { FriendshipId, UserId } from 'src/core/types'
import { Friendship } from 'src/modules/friends/domain/types'
import { UserMapper } from 'src/modules/users/infrastructure/mappers/user.mapper'

type PrismaFriendshipWithUsers = PrismaFriendship & {
  user1?: PrismaUser
  user2?: PrismaUser
}

@Injectable()
export class FriendshipMapper {
  constructor(private readonly userMapper: UserMapper) {}

  toDomain(friendship: PrismaFriendshipWithUsers, opts?: { withUsers?: boolean }): Friendship {
    const domain: Friendship = {
      friendshipId: friendship.friendshipId as FriendshipId,
      user1Id: friendship.user1Id as UserId,
      user2Id: friendship.user2Id as UserId,
      createdAt: new Date(friendship.createdAt),
    }

    if (opts?.withUsers) {
      if (friendship.user1) {
        domain.user1 = this.userMapper.toDomain(friendship.user1)
      }
      if (friendship.user2) {
        domain.user2 = this.userMapper.toDomain(friendship.user2)
      }
    }

    return domain
  }
}

