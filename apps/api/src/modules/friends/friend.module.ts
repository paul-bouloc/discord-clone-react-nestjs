import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/core/prisma/prisma.module'
import { UserModule } from 'src/modules/users/user.module'
import { FriendRequestMapper } from './infrastructure/mappers/friend-request.mapper'
import { FriendshipMapper } from './infrastructure/mappers/friendship.mapper'

@Module({
  imports: [PrismaModule, UserModule],
  providers: [FriendshipMapper, FriendRequestMapper],
  exports: [FriendshipMapper, FriendRequestMapper],
})
export class FriendModule {}

