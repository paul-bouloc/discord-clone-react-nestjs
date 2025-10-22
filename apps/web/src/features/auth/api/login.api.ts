import { setError, setUser } from '@/features/auth/store'
import type { User } from '@/features/users/types/user.type'
import { api, getApiErrorMessage } from '@/lib/api-client'
import { useAppDispatch } from '@/state'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { invalidateAfterAuth } from './query-invalidation'

export interface LoginPayload {
  email: string
  password: string
}

export type LoginResult = User

export async function login(payload: LoginPayload): Promise<LoginResult> {
  return await api.post('/auth/login', payload)
}

export function useLogin() {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: async (user) => {
      dispatch(setUser(user))
      await invalidateAfterAuth(queryClient)
    },
    onError: (error) => {
      dispatch(setError(getApiErrorMessage(error)))
    },
  })
}
