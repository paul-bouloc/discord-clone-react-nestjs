import type { User } from '@/features/users/types/user.type'
import { api } from '@/lib/api-client'
import { useQuery } from '@tanstack/react-query'
import { PROFILE_QUERY_CONFIG } from './query-config'
import { profileKeys } from './query-keys'

export const getSelfUser = async (): Promise<User> => {
  return await api.get('/me')
}

export const useSelfUser = () => {
  return useQuery({
    queryKey: profileKeys.self(),
    queryFn: getSelfUser,
    ...PROFILE_QUERY_CONFIG,
  })
}
