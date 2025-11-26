import { QueryClient } from '@tanstack/react-query'
import { friendsKeys } from './query-keys'

export const invalidateFriendsQueries = (queryClient: QueryClient) => {
  return queryClient.invalidateQueries({
    queryKey: friendsKeys.all,
    refetchType: 'active',
  })
}

export const invalidateFriendships = (queryClient: QueryClient) => {
  return queryClient.invalidateQueries({
    queryKey: friendsKeys.friendships(),
    refetchType: 'active',
  })
}
