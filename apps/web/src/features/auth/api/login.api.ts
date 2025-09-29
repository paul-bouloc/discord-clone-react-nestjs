import type { User } from '@/features/users/types/user.type'
import { api } from '@/lib/api-client'
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

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: () => {
      // Invalide et refetch l'utilisateur courant
      void queryClient.invalidateQueries({ queryKey: ['selfUser'] })
    },
  })
}
