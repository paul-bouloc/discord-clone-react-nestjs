import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/core/prisma/prisma.service'
import { FriendRequestId, UserId } from 'src/core/types'
import { FriendRequestStatus } from 'src/modules/friends/domain/types'
import { FriendRequestMapper } from 'src/modules/friends/infrastructure/mappers/friend-request.mapper'

@Injectable()
export class FriendRequestRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly friendRequestMapper: FriendRequestMapper,
  ) {}

  async upsert(requesterId: UserId, addresseeId: UserId) {
    const friendRequest = await this.prisma.friendRequest.upsert({
      where: {
        requesterId_addresseeId: {
          requesterId,
          addresseeId,
        },
      },
      create: {
        requesterId,
        addresseeId,
        status: FriendRequestStatus.PENDING,
      },
      update: {
        status: FriendRequestStatus.PENDING,
      },
      include: {
        requester: true,
        addressee: true,
      },
    })

    return this.friendRequestMapper.toDomain(friendRequest, { withUsers: true })
  }

  async findById(friendRequestId: FriendRequestId) {
    const friendRequest = await this.prisma.friendRequest.findUnique({
      where: { friendRequestId },
      include: {
        requester: true,
        addressee: true,
      },
    })

    return friendRequest ? this.friendRequestMapper.toDomain(friendRequest, { withUsers: true }) : null
  }

  async findByRequesterIdAndAddresseeId(requesterId: UserId, addresseeId: UserId) {
    const friendRequest = await this.prisma.friendRequest.findUnique({
      where: { requesterId_addresseeId: { requesterId, addresseeId } },
      include: {
        requester: true,
        addressee: true,
      },
    })

    return friendRequest ? this.friendRequestMapper.toDomain(friendRequest, { withUsers: true }) : null
  }

  async findManyByUserId(userId: UserId) {
    const friendRequests = await this.prisma.friendRequest.findMany({
      where: {
        OR: [{ requesterId: userId }, { addresseeId: userId }],
      },
      include: {
        requester: true,
        addressee: true,
      },
    })

    return friendRequests.map((request) => this.friendRequestMapper.toDomain(request, { withUsers: true }))
  }

  async updateStatus(friendRequestId: FriendRequestId, status: FriendRequestStatus) {
    const friendRequest = await this.prisma.friendRequest.update({
      where: { friendRequestId },
      data: { status },
      include: {
        requester: true,
        addressee: true,
      },
    })

    return this.friendRequestMapper.toDomain(friendRequest, { withUsers: true })
  }
}

