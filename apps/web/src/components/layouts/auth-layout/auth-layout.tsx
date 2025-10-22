import { Loading } from '@/app/loading'
import { paths } from '@/config/paths'
import { useAuth } from '@/features/auth/store/use-auth'
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
    return <Navigate to={paths.app.root.getHref()} replace />
  }

  return <>{children}</>
}
