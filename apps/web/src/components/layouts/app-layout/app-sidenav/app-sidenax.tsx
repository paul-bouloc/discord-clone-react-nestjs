import { AppSidenavPrivateNav } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-private-nav'
import { AppSidenavServersList } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-servers-list'

export const AppSidenav = () => {
  return (
    <div className="flex max-w-[374px] flex-1 shrink-0 bg-gray-800">
      <AppSidenavServersList />
      <AppSidenavPrivateNav />
    </div>
  )
}
