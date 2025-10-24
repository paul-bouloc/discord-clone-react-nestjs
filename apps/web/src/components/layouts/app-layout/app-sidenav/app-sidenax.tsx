import { AppSidenavPrivateNav } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-private-nav'
import { AppSidenavServerNav } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-server-nav'
import { AppSidenavServersList } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-servers-list'
import { paths } from '@/config/paths'
import { useLocation } from 'react-router'

export const AppSidenav = () => {
  const location = useLocation()

  const isPrivateSpace = location.pathname.includes(paths.app.personal.path)
  const isServerSpace = !isPrivateSpace

  return (
    <div className="flex max-w-[374px] flex-1 shrink-0 bg-gray-800">
      <AppSidenavServersList />
      {isPrivateSpace && <AppSidenavPrivateNav />}
      {isServerSpace && <AppSidenavServerNav />}
    </div>
  )
}
