import { createQueryKey } from '@/types/query-key.type'

export const profileKeys = {
  all: createQueryKey(['profile'] as const),
  self: () => createQueryKey([...profileKeys.all, 'self'] as const),
} as const

export type ProfileQueryKey = typeof profileKeys.all | ReturnType<typeof profileKeys.self>
