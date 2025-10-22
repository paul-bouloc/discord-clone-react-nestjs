import type { User } from '@/features/users/types/user.type'

export interface AuthState {
  user: User | null
  isLoading: boolean
  error: string | null
  isAuthenticated: boolean
}
