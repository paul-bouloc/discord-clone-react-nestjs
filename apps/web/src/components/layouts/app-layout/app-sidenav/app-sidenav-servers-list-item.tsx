import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface AppSidenavServersListItemProps {
  isSelected?: boolean
  serverAvatarSrc?: string
  avatarFallback?: string
  icon?: React.ReactNode
  showSelectedMarker?: boolean
  tooltip?: string
}

export const AppSidenavServersListItem = ({
  isSelected,
  serverAvatarSrc,
  avatarFallback,
  icon,
  showSelectedMarker = true,
  tooltip,
}: AppSidenavServersListItemProps) => {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="group relative flex h-10 w-full cursor-pointer justify-center">
            {/* ETA MARK */}
            <div className="absolute top-0 left-0 w-1">
              {/* Marker sélectionné - pleine hauteur */}
              {isSelected && showSelectedMarker && (
                <div className="bg-gray-230 flex h-10 items-center justify-center rounded-r-full"></div>
              )}

              {/* Marker hover - demi-hauteur (seulement si pas sélectionné) */}
              {!isSelected && showSelectedMarker && (
                <div className="bg-gray-230 mt-2.5 flex h-5 items-center justify-center rounded-r-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
              )}
            </div>
            {/* BOX */}

            <div
              className={cn(
                'group flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg transition-all duration-200',
                isSelected && 'bg-brand-500',
                !isSelected && 'group-hover:bg-brand-500 bg-gray-700',
              )}
            >
              {serverAvatarSrc ? (
                <img src={serverAvatarSrc} alt="server avatar" className="h-full w-full object-cover object-center" />
              ) : avatarFallback ? (
                <p>{avatarFallback}</p>
              ) : icon ? (
                icon
              ) : (
                <img src="/src/assets/discord-mark-white.svg" alt="discord logo" className="w-[22.8px]" />
              )}
            </div>
          </button>
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent side="right" className="-translate-x-4">
            <p>{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </>
  )
}
