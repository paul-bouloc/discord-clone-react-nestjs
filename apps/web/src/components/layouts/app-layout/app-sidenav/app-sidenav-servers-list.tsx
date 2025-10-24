import { AppSidenavItem } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-item'
import { AppSidenavServerItem } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-server-item'
import { paths } from '@/config/paths'
import { useIsPersonalSelected } from '@/lib/hooks/use-server-selection'
import { PlusIcon } from 'lucide-react'

const mockServers = [
  { id: 'element-server', name: "Serveur d'Element", avatarFallback: 'SdE' },
  { id: 'element-server-2', name: 'Memology', avatarFallback: 'M' },
]

export const AppSidenavServersList = () => {
  const isPersonalSelected = useIsPersonalSelected()
  const personalHref = paths.app.personal.root.getHref()

  return (
    <nav className="flex max-w-[72px] flex-1 flex-col items-center gap-2">
      {/* Messages privés */}
      <AppSidenavItem tooltip="Messages privés" isSelected={isPersonalSelected} href={personalHref} />

      {/* Separator */}
      <div className="bg-gray-660 h-px w-6"></div>

      {/* Liste des serveurs */}
      {mockServers.map((server) => (
        <AppSidenavServerItem key={server.id} server={server} />
      ))}

      {/* Bouton d'ajout de serveur */}
      <AppSidenavItem
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
    </nav>
  )
}
