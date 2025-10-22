import { createQueryKey } from '@/types/query-key.type'

export const authKeys = {
  all: createQueryKey(['auth'] as const),
  login: () => createQueryKey([...authKeys.all, 'login'] as const),
  register: () => createQueryKey([...authKeys.all, 'register'] as const),
  logout: () => createQueryKey([...authKeys.all, 'logout'] as const),
} as const

export type AuthQueryKey =
  | typeof authKeys.all
  | ReturnType<typeof authKeys.login>
  | ReturnType<typeof authKeys.register>
  | ReturnType<typeof authKeys.logout>
