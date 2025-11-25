import { Button } from '@/components/ui/button/button'
import { UserAvatar } from '@/components/ui/user-avatar'
import { paths } from '@/config/paths'
import { usePrivateChannelSelection } from '@/lib/hooks/use-server-selection'
import { cn } from '@/lib/utils'
import { Link } from 'react-router'

interface AppPrivateNavChannelItemProps {
  channelId: string
  avatarSrc: string | undefined
  children: React.ReactNode
}

export const AppPrivateNavChannelItem = ({ channelId, avatarSrc, children }: AppPrivateNavChannelItemProps) => {
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
        <UserAvatar src={avatarSrc} />
        <p className={isSelected ? 'text-gray-130' : 'group-hover:text-gray-130'}>{children}</p>
      </Button>
    </Link>
  )
}
