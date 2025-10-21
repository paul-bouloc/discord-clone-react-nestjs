import { AppSidenavServersListItem } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-servers-list-item'
import { PlusIcon } from 'lucide-react'

export const AppSidenavServersList = () => {
  return (
    <div className="flex max-w-[72px] flex-1 flex-col items-center gap-2">
      <AppSidenavServersListItem tooltip="Messages privés" />
      <div className="bg-gray-660 h-px w-6"></div>
      <AppSidenavServersListItem tooltip="Serveur d'Element" avatarFallback="SdE" />
      {/* TODO: Add a modal to add a server */}
      <AppSidenavServersListItem
        tooltip="Ajouter un serveur"
        icon={
          <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gray-200">
            <PlusIcon
              className="text-gray-630 group-hover:text-brand-500 size-4 transition-colors duration-200"
              strokeWidth={3}
            />
          </div>
        }
      />
    </div>
  )
}
