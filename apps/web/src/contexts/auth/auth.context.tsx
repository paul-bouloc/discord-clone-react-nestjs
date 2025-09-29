import type { User } from '@/features/users/types/user.type'
import { createContext } from 'react'

export interface AuthContextType {
  user: User | null
  error: Error | null
  isLoading: boolean
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
