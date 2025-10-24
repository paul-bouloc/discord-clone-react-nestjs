import { AppBreadcrumb } from '@/components/layouts/app-layout/app-breacrumb'
import { AppSidenav } from '@/components/layouts/app-layout/app-sidenav/app-sidenav'
import { Outlet } from 'react-router'

interface AppPageLayoutProps {
  children?: React.ReactNode
}

export const AppPageLayout = ({ children }: AppPageLayoutProps) => {
  return (
    <div className="flex h-screen w-full flex-col">
      <AppBreadcrumb />
      <div className="flex w-full flex-1">
        <AppSidenav />
        {children || <Outlet />}
      </div>
    </div>
  )
}
