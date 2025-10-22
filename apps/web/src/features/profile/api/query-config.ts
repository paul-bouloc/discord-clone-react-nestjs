import type { QueryConfig } from '@/types/query-key.type'

export const PROFILE_QUERY_CONFIG: QueryConfig = {
  staleTime: 1000 * 60 * 5, // 5 minutes
  gcTime: 1000 * 60 * 15, // 15 minutes
  retry: 2,
  throwOnError: false,
} as const
