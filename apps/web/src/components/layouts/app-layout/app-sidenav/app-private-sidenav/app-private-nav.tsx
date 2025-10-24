import { FriendIcon } from '@/components/icons/friend-icon'
import { AppPrivateNavChannelItem } from '@/components/layouts/app-layout/app-sidenav/app-private-sidenav/app-private-nav-channel-item'
import { AppPrivateNavSubmenuItem } from '@/components/layouts/app-layout/app-sidenav/app-private-sidenav/app-private-nav-submenu-item'
import { Button } from '@/components/ui/button/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { paths } from '@/config/paths'
import { useLocation } from 'react-router'

const friends = [
  {
    id: '123',
    name: 'Megy_77',
    avatarSrc: 'https://github.com/shadcn.png',
    avatarFallback: 'CN',
  },
  {
    id: '456',
    name: 'Ludovic',
    avatarSrc: 'https://github.com/shadcn.png',
    avatarFallback: 'JD',
  },
  {
    id: '789',
    name: 'Flo',
    avatarSrc: 'https://github.com/shadcn.png',
    avatarFallback: 'JD',
  },
  {
    id: '101',
    name: 'Gamper',
    avatarSrc: 'https://github.com/shadcn.png',
    avatarFallback: 'JD',
  },
  {
    id: '102',
    name: 'Kryyys',
    avatarSrc: 'https://github.com/shadcn.png',
    avatarFallback: 'JD',
  },
]

export const AppPrivateNav = () => {
  const location = useLocation()

  const isOnFriendList =
    location.pathname === paths.app.personal.root.getHref() ||
    location.pathname === `${paths.app.personal.root.getHref()}/`

  return (
    <nav className="border-gray-660 flex flex-1 flex-col rounded-tl-lg border-t border-l">
      {/* Search header */}
      <div className="border-gray-660 border-b px-2 pt-[7px] pb-2">
        <Button size="sm" className="hover:bg-gray-630 bg-gray-660 w-full border-0 py-0 text-sm text-gray-200">
          Rechercher/lancer une conversation
        </Button>
      </div>

      <ScrollArea className="flex h-full min-h-0 flex-col px-2" scrollBarClassName="w-2">
        {/* Subnav */}
        <div className="mt-2 flex flex-col gap-0.5">
          <AppPrivateNavSubmenuItem
            isSelected={isOnFriendList}
            href={paths.app.personal.root.getHref()}
            icon={<FriendIcon className="size-5" />}
          >
            Amis
          </AppPrivateNavSubmenuItem>
        </div>

        {/* Separator */}
        <div className="bg-gray-660 my-2 h-px w-full"></div>

        {/* Conversations privées */}
        <div className="flex flex-1 flex-col gap-0.5">
          <h4 className="hover:text-gray-130 mb-0.5 cursor-default pl-2 text-sm font-medium text-gray-400">
            Messages privés
          </h4>
          {friends.map((friend) => (
            <AppPrivateNavChannelItem
              key={friend.id}
              channelId={friend.id}
              avatarSrc={friend.avatarSrc}
              avatarFallback={friend.avatarFallback}
            >
              {friend.name}
            </AppPrivateNavChannelItem>
          ))}
        </div>
      </ScrollArea>
    </nav>
  )
}
