import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/core/prisma/prisma.module'
import { AcceptFriendRequestUc } from 'src/modules/friends/application/use-cases/friend-requests/accept-friend-request.uc'
import { CancelFriendRequestUc } from 'src/modules/friends/application/use-cases/friend-requests/cancel-friend-request.uc'
import { CreateFriendRequestUc } from 'src/modules/friends/application/use-cases/friend-requests/create-friend-request.uc'
import { GetFriendRequestsUc } from 'src/modules/friends/application/use-cases/friend-requests/get-friend-requests.uc'
import { RejectFriendRequestUc } from 'src/modules/friends/application/use-cases/friend-requests/reject-friend-request.uc'
import { GetFriendshipsUc } from 'src/modules/friends/application/use-cases/get-friendships.uc'
import { FriendRequestRepository } from 'src/modules/friends/infrastructure/repositories/friend-request.repository'
import { FriendshipRepository } from 'src/modules/friends/infrastructure/repositories/friendship.repository'
import { FriendRequestsController } from 'src/modules/friends/interface/friend-requests.controller'
import { FriendshipsController } from 'src/modules/friends/interface/friendships.controller'
import { UserModule } from 'src/modules/users/user.module'
import { FriendRequestMapper } from './infrastructure/mappers/friend-request.mapper'
import { FriendshipMapper } from './infrastructure/mappers/friendship.mapper'

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [FriendshipsController, FriendRequestsController],
  providers: [
    FriendshipMapper,
    FriendRequestMapper,
    FriendshipRepository,
    FriendRequestRepository,
    GetFriendshipsUc,
    GetFriendRequestsUc,
    CreateFriendRequestUc,
    CancelFriendRequestUc,
    AcceptFriendRequestUc,
    RejectFriendRequestUc,
  ],
  exports: [FriendshipMapper, FriendRequestMapper],
})
export class FriendModule {}

