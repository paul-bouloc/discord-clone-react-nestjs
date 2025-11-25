import { FriendshipId, UserId } from 'src/core/types'
import { User } from 'src/modules/users/domain/types'

export interface Friendship {
  friendshipId: FriendshipId
  user1Id: UserId
  user2Id: UserId
  createdAt: Date
  user1?: User
  user2?: User
}

