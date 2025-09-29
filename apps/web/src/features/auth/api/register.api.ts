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

  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
    onSuccess: () => {
      // Invalide et refetch l'utilisateur courant
      void queryClient.invalidateQueries({ queryKey: ['selfUser'] })
    },
  })
}
