import { Loading } from '@/app/loading'
import { paths } from '@/config/paths'
import { useAuth } from '@/features/auth/store/use-auth'
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
    return <Navigate to={paths.auth.login.getHref()} replace />
  }

  return <>{children}</>
}
