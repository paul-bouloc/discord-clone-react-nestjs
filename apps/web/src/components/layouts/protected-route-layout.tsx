import { Spinner } from '@/components/ui/spinner'
import { useAuth } from '@/contexts/auth/auth.hook'
import { Navigate } from 'react-router'

interface ProtectedRouteLayoutProps {
  children: React.ReactNode
}

export const ProtectedRouteLayout = ({ children }: ProtectedRouteLayoutProps) => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
        <Spinner size={48} />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }

  return <>{children}</>
}
