import { QueryClient } from '@tanstack/react-query'
import { profileKeys } from './query-keys'

export const invalidateProfileQueries = (queryClient: QueryClient) => {
  return queryClient.invalidateQueries({
    queryKey: profileKeys.all,
    refetchType: 'active',
  })
}

export const invalidateSelfProfile = (queryClient: QueryClient) => {
  return queryClient.invalidateQueries({
    queryKey: profileKeys.self(),
    refetchType: 'active',
  })
}

export const invalidateAfterProfileUpdate = async (queryClient: QueryClient, userId?: string) => {
  const promises = [invalidateProfileQueries(queryClient)]

  if (userId) {
    promises.push(invalidateSelfProfile(queryClient))
  }

  return Promise.all(promises)
}
