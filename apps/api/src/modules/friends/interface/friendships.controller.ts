import { Controller, Get } from '@nestjs/common'
import { User } from 'src/core/auth/decorators/user.decorator'
import { GetFriendshipsUc } from 'src/modules/friends/application/use-cases/get-friendships.uc'
import { User as UserType } from 'src/modules/users/domain/types'

@Controller('friendships')
export class FriendshipsController {
  constructor(private readonly getFriendshipsUc: GetFriendshipsUc) {}

  @Get()
  getFriendships(@User() user: UserType) {
    return this.getFriendshipsUc.execute(user.userId)
  }
}
