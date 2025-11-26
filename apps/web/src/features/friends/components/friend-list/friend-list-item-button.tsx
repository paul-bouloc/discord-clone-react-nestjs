import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface FriendListButtonProps {
  icon: React.ReactNode
  tooltip?: string
  onClick: () => void
}

export const FriendListButton = ({ icon, tooltip, onClick }: FriendListButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className="hover:text-gray-160 bg-gray-730 flex size-9 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-all duration-200"
          onClick={onClick}
        >
          {icon}
        </button>
      </TooltipTrigger>
      {tooltip && (
        <TooltipContent side="top" align="center" className="-translate-y-1">
          <p>{tooltip}</p>
        </TooltipContent>
      )}
    </Tooltip>
  )
}
