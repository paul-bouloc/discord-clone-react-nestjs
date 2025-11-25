import { FriendRequestId, UserId } from 'src/core/types'
import { User } from 'src/modules/users/domain/types'
import { FriendRequestStatus } from './friend-request-status.type'

export interface FriendRequest {
  friendRequestId: FriendRequestId
  requesterId: UserId
  addresseeId: UserId
  status: FriendRequestStatus
  createdAt: Date
  updatedAt: Date
  requester?: User
  addressee?: User
}

