import { useAppDispatch } from '@/app/hook'
import { setError, setUser } from '@/features/auth/store'
import type { User } from '@/features/users/types/user.type'
import { api, getApiErrorMessage } from '@/lib/api-client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

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
    onSuccess: (user) => {
      dispatch(setUser(user))
      void queryClient.invalidateQueries({ queryKey: ['selfUser'] })
    },
    onError: (error) => {
      dispatch(setError(getApiErrorMessage(error)))
    },
  })
}
