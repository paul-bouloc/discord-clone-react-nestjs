import { AppPageLayout } from './app-page-layout'
import { ProtectedRouteLayout } from './protected-route-layout'

interface AppWrapperProps {
  children?: React.ReactNode
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <ProtectedRouteLayout>
      <AppPageLayout>{children}</AppPageLayout>
    </ProtectedRouteLayout>
  )
}
