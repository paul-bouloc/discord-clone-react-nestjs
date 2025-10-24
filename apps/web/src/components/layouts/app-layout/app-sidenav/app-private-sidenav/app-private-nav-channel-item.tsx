import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button/button'
import { paths } from '@/config/paths'
import { usePrivateChannelSelection } from '@/lib/hooks/use-server-selection'
import { cn } from '@/lib/utils'
import { Link } from 'react-router'

interface AppPrivateNavChannelItemProps {
  channelId: string
  avatarSrc: string
  avatarFallback: string
  children: React.ReactNode
}

export const AppPrivateNavChannelItem = ({
  channelId,
  avatarSrc,
  avatarFallback,
  children,
}: AppPrivateNavChannelItemProps) => {
  const isSelected = usePrivateChannelSelection(channelId)
  const channelHref = paths.app.personal.channel.getHref(channelId)
  return (
    <Link to={channelHref}>
      <Button
        size="sm"
        className={cn(
          'group text-md h-[42px] w-full justify-start gap-2 border-0 px-2 py-0 transition-none hover:bg-gray-700',
          isSelected ? 'bg-gray-630 text-gray-130' : 'bg-transparent text-gray-400',
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <p className={isSelected ? 'text-gray-130' : 'group-hover:text-gray-130'}>{children}</p>
      </Button>
    </Link>
  )
}
