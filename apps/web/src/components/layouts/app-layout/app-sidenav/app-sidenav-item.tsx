import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Link } from 'react-router'

interface AppSidenavServersListItemProps {
  isSelected?: boolean
  serverAvatarSrc?: string
  avatarFallback?: string
  icon?: React.ReactNode
  showSelectedMarker?: boolean
  tooltip?: string
  href?: string
  onClick?: () => void
}

export const AppSidenavItem = ({
  isSelected,
  serverAvatarSrc,
  avatarFallback,
  icon,
  showSelectedMarker = true,
  tooltip,
  href,
  onClick,
}: AppSidenavServersListItemProps) => {
  const content = (
    <>
      {/* ETA MARK */}
      <div className="absolute top-0 left-0 w-1">
        {showSelectedMarker && (
          <div
            className={cn(
              'bg-gray-230 flex items-center justify-center rounded-r-full transition-all duration-200',
              isSelected
                ? 'h-10' // Pleine hauteur quand sélectionné
                : 'mt-2.5 h-5 opacity-0 group-hover:opacity-100', // Demi-hauteur avec hover
            )}
          ></div>
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
    </>
  )

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          {href ? (
            <Link to={href} className="group relative flex h-10 w-full cursor-pointer justify-center">
              {content}
            </Link>
          ) : (
            <button onClick={onClick} className="group relative flex h-10 w-full cursor-pointer justify-center">
              {content}
            </button>
          )}
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
