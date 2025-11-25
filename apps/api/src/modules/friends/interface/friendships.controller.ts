import { Controller, Delete, Get, Param, ParseUUIDPipe } from '@nestjs/common'
import { User } from 'src/core/auth/decorators/user.decorator'
import { UserId } from 'src/core/types'
import { DeleteFriendshipUc } from 'src/modules/friends/application/use-cases/delete-friendship.uc'
import { GetFriendshipsUc } from 'src/modules/friends/application/use-cases/get-friendships.uc'
import { User as UserType } from 'src/modules/users/domain/types'

@Controller('friendships')
export class FriendshipsController {
  constructor(
    private readonly getFriendshipsUc: GetFriendshipsUc,
    private readonly deleteFriendshipUc: DeleteFriendshipUc,
  ) {}

  @Get()
  getFriendships(@User() user: UserType) {
    return this.getFriendshipsUc.execute(user.userId)
  }

  @Delete(':friendId')
  deleteFriendship(@User() user: UserType, @Param('friendId', ParseUUIDPipe) friendId: UserId) {
    return this.deleteFriendshipUc.execute(user.userId, friendId)
  }
}
