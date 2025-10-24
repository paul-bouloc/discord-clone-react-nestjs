import { paths } from '@/config/paths'
import { useLocation } from 'react-router'

export type ServerType = 'personal' | 'server'

interface UseServerSelectionOptions {
  serverType: ServerType
  serverId?: string
}

/**
 * Hook pour déterminer si un serveur est sélectionné en fonction de l'URL actuelle
 * @param options - Configuration du serveur à vérifier
 * @returns boolean - true si le serveur est sélectionné
 */
export const useServerSelection = ({ serverType, serverId }: UseServerSelectionOptions): boolean => {
  const location = useLocation()
  const currentPath = location.pathname

  switch (serverType) {
    case 'personal':
      // Vérifie si on est sur la route des messages privés (@me)
      return currentPath === paths.app.personal.root.getHref()

    case 'server':
      // Vérifie si on est sur une route de serveur spécifique
      if (!serverId) return false
      return currentPath === paths.app.server.getHref(serverId)

    default:
      return false
  }
}

export const usePrivateChannelSelection = (channelId: string): boolean => {
  const location = useLocation()
  const currentPath = location.pathname
  return currentPath === paths.app.personal.channel.getHref(channelId)
}

/**
 * Hook pour obtenir l'ID du serveur actuellement sélectionné depuis l'URL
 * @returns string | null - L'ID du serveur ou null si aucun serveur n'est sélectionné
 */
export const useCurrentServerId = (): string | null => {
  const location = useLocation()
  const currentPath = location.pathname

  // Si on est sur la route des messages privés
  if (currentPath === paths.app.personal.root.getHref()) {
    return null
  }

  // Si on est sur une route de serveur, extraire l'ID
  const serverMatch = currentPath.match(/^\/channels\/([^/]+)/)
  if (serverMatch && serverMatch[1] !== '@me') {
    return serverMatch[1]
  }

  return null
}

/**
 * Hook pour vérifier si un serveur spécifique est sélectionné
 * Utilise useCurrentServerId pour éviter les violations des règles des hooks
 * @param serverId - L'ID du serveur à vérifier
 * @returns boolean - true si le serveur est sélectionné
 */
export const useIsServerSelected = (serverId: string): boolean => {
  const currentServerId = useCurrentServerId()
  return currentServerId === serverId
}

/**
 * Hook pour vérifier si les messages privés sont sélectionnés
 * @returns boolean - true si les messages privés sont sélectionnés
 */
export const useIsPersonalSelected = (): boolean => {
  const currentServerId = useCurrentServerId()
  return currentServerId === null
}
