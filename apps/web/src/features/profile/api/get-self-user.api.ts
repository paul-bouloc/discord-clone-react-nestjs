import type { User } from '@/features/users/types/user.type'
import { api } from '@/lib/api-client'
import { useQuery } from '@tanstack/react-query'

export const getSelfUser = async (): Promise<User | null> => {
  const response = await api.get('/me')

  return response.data
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
