import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common'
import { User } from 'src/core/auth/decorators/user.decorator'
import { FriendRequestId, UserId } from 'src/core/types'
import { ZodValidate } from 'src/core/validation'
import { CreateFriendRequestDto } from 'src/modules/friends/application/dtos/create-friend-request.dto'
import { AcceptFriendRequestUc } from 'src/modules/friends/application/use-cases/friend-requests/accept-friend-request.uc'
import { CancelFriendRequestUc } from 'src/modules/friends/application/use-cases/friend-requests/cancel-friend-request.uc'
import { CreateFriendRequestUc } from 'src/modules/friends/application/use-cases/friend-requests/create-friend-request.uc'
import { GetFriendRequestsUc } from 'src/modules/friends/application/use-cases/friend-requests/get-friend-requests.uc'
import { RejectFriendRequestUc } from 'src/modules/friends/application/use-cases/friend-requests/reject-friend-request.uc'
import { User as UserType } from 'src/modules/users/domain/types'

@Controller('friendships/requests')
export class FriendRequestsController {
  constructor(
    private readonly createFriendRequestUc: CreateFriendRequestUc,
    private readonly cancelFriendRequestUc: CancelFriendRequestUc,
    private readonly acceptFriendRequestUc: AcceptFriendRequestUc,
    private readonly rejectFriendRequestUc: RejectFriendRequestUc,
    private readonly getFriendRequestsUc: GetFriendRequestsUc,
  ) {}

  @Post()
  @ZodValidate(CreateFriendRequestDto)
  create(@User() user: UserType, @Body() body: CreateFriendRequestDto) {
    return this.createFriendRequestUc.execute(user.userId, body.addresseeId as UserId)
  }

  @Get()
  getAll(@User() user: UserType) {
    return this.getFriendRequestsUc.execute(user.userId)
  }

  @Patch(':friendRequestId/cancel')
  cancel(@User() user: UserType, @Param('friendRequestId', new ParseUUIDPipe()) friendRequestId: string) {
    return this.cancelFriendRequestUc.execute(friendRequestId as FriendRequestId, user.userId)
  }

  @Patch(':friendRequestId/accept')
  accept(@User() user: UserType, @Param('friendRequestId', new ParseUUIDPipe()) friendRequestId: string) {
    return this.acceptFriendRequestUc.execute(friendRequestId as FriendRequestId, user.userId)
  }

  @Patch(':friendRequestId/reject')
  reject(@User() user: UserType, @Param('friendRequestId', new ParseUUIDPipe()) friendRequestId: string) {
    return this.rejectFriendRequestUc.execute(friendRequestId as FriendRequestId, user.userId)
  }
}

