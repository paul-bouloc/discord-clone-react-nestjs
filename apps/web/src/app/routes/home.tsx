import { Loading } from '@/app/loading'
import { paths } from '@/config/paths'
import { useAuth } from '@/features/auth/store/use-auth'
import { Navigate } from 'react-router'

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <Loading />
  }

  if (isAuthenticated) {
    return <Navigate to={paths.app.root.getHref()} replace />
  }

  return <Navigate to={paths.auth.root.getHref()} replace />
}
