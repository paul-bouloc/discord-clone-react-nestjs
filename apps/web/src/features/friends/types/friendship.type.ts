import type { User } from '@/features/users/types/user.type'
import type { FriendshipId, UserId } from '@/types/ids.type'

export interface Friendship {
  friendshipId: FriendshipId
  user1Id: UserId
  user2Id: UserId
  createdAt: Date
  user1?: User
  user2?: User
}
