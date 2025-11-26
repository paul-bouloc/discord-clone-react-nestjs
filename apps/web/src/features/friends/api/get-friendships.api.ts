import type { Friendship } from '@/features/friends/types/friendship.type'
import { api } from '@/lib/api-client'
import { useQuery } from '@tanstack/react-query'
import { FRIENDS_QUERY_CONFIG } from './query-config'
import { friendsKeys } from './query-keys'

export const getFriendships = async (): Promise<Friendship[]> => {
  return await api.get('/friendships')
}

export const useFriendships = () => {
  return useQuery({
    queryKey: friendsKeys.friendships(),
    queryFn: getFriendships,
    ...FRIENDS_QUERY_CONFIG,
  })
}
