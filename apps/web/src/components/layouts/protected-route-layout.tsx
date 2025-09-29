import { Loading } from '@/app/loading'
import { useAuth } from '@/contexts/auth/auth.hook'
import { Navigate } from 'react-router'

interface ProtectedRouteLayoutProps {
  children: React.ReactNode
}

export const ProtectedRouteLayout = ({ children }: ProtectedRouteLayoutProps) => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <Loading />
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }

  return <>{children}</>
}
