import { AppPrivateNav } from '@/components/layouts/app-layout/app-sidenav/app-private-sidenav/app-private-nav'
import { AppServerNav } from '@/components/layouts/app-layout/app-sidenav/app-server-nav/app-server-nav'
import { AppSidenavServersList } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-servers-list'
import { paths } from '@/config/paths'
import { useLocation } from 'react-router'

export const AppSidenav = () => {
  const location = useLocation()

  const isPrivateSpace = location.pathname.includes(paths.app.personal.root.path)
  const isServerSpace = !isPrivateSpace

  return (
    <div className="flex max-w-[374px] flex-1 shrink-0 bg-gray-800">
      <AppSidenavServersList />
      {isPrivateSpace && <AppPrivateNav />}
      {isServerSpace && <AppServerNav />}
    </div>
  )
}
