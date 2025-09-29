import { Spinner } from '@/components/ui/spinner'
import { useAuth } from '@/contexts/auth/auth.hook'
import { Navigate } from 'react-router'

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
        <Spinner size={48} />
      </div>
    )
  }

  if (isAuthenticated) {
    return <Navigate to="/app" replace />
  }

  return <Navigate to="/auth" replace />
}
