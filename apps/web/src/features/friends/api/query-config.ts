import type { QueryConfig } from '@/types/query-key.type'

export const FRIENDS_QUERY_CONFIG: QueryConfig = {
  staleTime: 1000 * 60 * 1, // 1 minute
  gcTime: 1000 * 60 * 10, // 10 minutes
  retry: false,
  throwOnError: false,
} as const
