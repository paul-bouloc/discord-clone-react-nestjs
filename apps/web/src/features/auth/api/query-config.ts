import type { QueryConfig } from '@/types/query-key.type'

export const AUTH_QUERY_CONFIG: QueryConfig = {
  staleTime: 1000 * 60 * 10, // 10 minutes
  gcTime: 1000 * 60 * 30, // 30 minutes
  retry: false,
  throwOnError: false,
} as const
