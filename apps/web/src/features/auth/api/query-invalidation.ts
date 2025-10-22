import { QueryClient } from '@tanstack/react-query'
import { authKeys } from './query-keys'

export const invalidateAuthQueries = (queryClient: QueryClient) => {
  return queryClient.invalidateQueries({
    queryKey: authKeys.all,
    refetchType: 'active',
  })
}

export const invalidateAfterAuth = async (queryClient: QueryClient) => {
  await invalidateAuthQueries(queryClient)

  await queryClient.invalidateQueries({
    queryKey: ['profile'],
    refetchType: 'active',
  })
}

export const invalidateAfterLogout = async (queryClient: QueryClient) => {
  await Promise.all([
    invalidateAuthQueries(queryClient),
    queryClient.invalidateQueries({ queryKey: ['profile'] }),
    queryClient.invalidateQueries({ queryKey: ['users'] }),
    queryClient.invalidateQueries({ queryKey: ['servers'] }),
  ])
}
