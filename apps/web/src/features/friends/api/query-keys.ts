import { createQueryKey } from '@/types/query-key.type'

export const friendsKeys = {
  all: createQueryKey(['friends'] as const),
  friendships: () => createQueryKey([...friendsKeys.all, 'friendships'] as const),
} as const

export type FriendsQueryKey = typeof friendsKeys.all | ReturnType<typeof friendsKeys.friendships>
