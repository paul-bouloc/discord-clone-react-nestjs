import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/core/prisma/prisma.service'
import { UserId } from 'src/core/types'
import { FriendshipMapper } from 'src/modules/friends/infrastructure/mappers/friendship.mapper'

@Injectable()
export class FriendshipRepository {
  constructor(private readonly prisma: PrismaService, private readonly friendshipMapper: FriendshipMapper) {}

  async findManyByUserId(userId: UserId) {
    const friendships = await this.prisma.friendship.findMany({
      where: { OR: [{ user1Id: userId }, { user2Id: userId }] },
      include: {
        user1: true,
        user2: true,
      },
    })

    return friendships.map((friendship) => this.friendshipMapper.toDomain(friendship, { withUsers: true }))
  }
}
