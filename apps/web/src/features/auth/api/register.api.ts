import { useAppDispatch } from '@/app/hook'
import { setUser } from '@/features/auth/store'
import type { User } from '@/features/users/types/user.type'
import { api } from '@/lib/api-client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

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
    onSuccess: (user) => {
      dispatch(setUser(user))
      void queryClient.invalidateQueries({ queryKey: ['selfUser'] })
    },
  })
}
