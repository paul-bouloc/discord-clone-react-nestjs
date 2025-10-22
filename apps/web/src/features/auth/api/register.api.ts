import { setUser } from '@/features/auth/store'
import type { User } from '@/features/users/types/user.type'
import { api } from '@/lib/api-client'
import { useAppDispatch } from '@/state'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { invalidateAfterAuth } from './query-invalidation'

export interface RegisterPayload {
  email: string
  displayName: string
  userName: string
  birthDate: string
  password: string
}

export type RegisterResult = User

export async function register(payload: RegisterPayload): Promise<RegisterResult> {
  return await api.post('/auth/register', payload)
}

export function useRegister() {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
    onSuccess: async (user) => {
      dispatch(setUser(user))
      await invalidateAfterAuth(queryClient)
    },
  })
}
