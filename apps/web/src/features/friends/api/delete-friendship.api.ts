import { api } from '@/lib/api-client'
import type { UserId } from '@/types/ids.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { invalidateFriendships } from './query-invalidation'

export interface DeleteFriendshipPayload {
  friendId: UserId
}

export const deleteFriendship = async ({ friendId }: DeleteFriendshipPayload): Promise<void> => {
  await api.delete(`/friendships/${friendId}`)
}

export const useDeleteFriendship = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteFriendship,
    onSuccess: async () => {
      await invalidateFriendships(queryClient)
    },
  })
}
