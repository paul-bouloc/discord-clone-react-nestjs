import { AppSidenavItem } from '@/components/layouts/app-layout/app-sidenav/app-sidenav-item'
import { useIsServerSelected } from '@/lib/hooks/use-server-selection'

interface Server {
  id: string
  name: string
  avatarUrl?: string
  avatarFallback?: string
}

interface AppSidenavServerItemProps {
  server: Server
}

/**
 * Composant pour un élément de serveur individuel
 * Respecte les règles des hooks en utilisant useIsServerSelected au niveau du composant
 */
export const AppSidenavServerItem = ({ server }: AppSidenavServerItemProps) => {
  const isSelected = useIsServerSelected(server.id)

  return (
    <AppSidenavItem
      tooltip={server.name}
      avatarFallback={server.avatarFallback}
      serverAvatarSrc={server.avatarUrl}
      isSelected={isSelected}
    />
  )
}
