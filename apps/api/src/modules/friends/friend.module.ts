import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/core/prisma/prisma.module'
import { GetFriendshipsUc } from 'src/modules/friends/application/use-cases/get-friendships.uc'
import { FriendshipRepository } from 'src/modules/friends/infrastructure/repositories/friendship.repository'
import { FriendshipsController } from 'src/modules/friends/interface/friendships.controller'
import { UserModule } from 'src/modules/users/user.module'
import { FriendRequestMapper } from './infrastructure/mappers/friend-request.mapper'
import { FriendshipMapper } from './infrastructure/mappers/friendship.mapper'

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [FriendshipsController],
  providers: [FriendshipMapper, FriendRequestMapper, FriendshipRepository, GetFriendshipsUc],
  exports: [FriendshipMapper, FriendRequestMapper],
})
export class FriendModule {}

