import { AuthContext, type AuthContextType } from '@/contexts/auth/auth.context'
import { useSelfUser } from '@/features/profile/api/get-self-user.api'
import { type ReactNode } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: user, isLoading, error } = useSelfUser()

  const isAuthenticated = Boolean(user)

  const value: AuthContextType = {
    user: user || null,
    error: error || null,
    isLoading,
    isAuthenticated,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
