import { AuthLayout } from './auth-layout'
import { AuthPageLayout } from './auth-page-layout'

interface AuthWrapperProps {
  children?: React.ReactNode
}

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <AuthLayout>
      <AuthPageLayout>{children}</AuthPageLayout>
    </AuthLayout>
  )
}
