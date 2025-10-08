import { AppSidenavServersListItem } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-servers-list-item'

export const AppSidenavServersList = () => {
  return (
    <div className="flex max-w-[72px] flex-1 flex-col items-center gap-2">
      <AppSidenavServersListItem />
      <div className="bg-gray-660 h-px w-6"></div>
    </div>
  )
}
