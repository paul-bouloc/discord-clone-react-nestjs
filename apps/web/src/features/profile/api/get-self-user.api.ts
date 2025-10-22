import type { User } from '@/features/users/types/user.type'
import { api } from '@/lib/api-client'
import { useQuery } from '@tanstack/react-query'

export const getSelfUser = async (): Promise<User> => {
  return await api.get('/me')
}

export const useSelfUser = () => {
  return useQuery({
    queryKey: ['selfUser'],
    queryFn: getSelfUser,
    retry: false,
    throwOnError: false,
    staleTime: 1000 * 60,
  })
}
