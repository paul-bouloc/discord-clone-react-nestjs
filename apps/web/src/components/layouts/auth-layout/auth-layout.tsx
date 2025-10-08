import { Loading } from '@/app/loading'
import { useAuth } from '@/contexts/auth/auth.hook'
import { Navigate } from 'react-router'

interface AuthLayoutProps {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <Loading />
  }

  if (isAuthenticated) {
    return <Navigate to="/app" replace />
  }

  return <>{children}</>
}
