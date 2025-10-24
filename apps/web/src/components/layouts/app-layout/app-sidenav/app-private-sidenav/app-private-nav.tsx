import { FriendIcon } from '@/components/icons/friend-icon'
import { Button } from '@/components/ui/button/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { paths } from '@/config/paths'
import { cn } from '@/lib/utils'
import { Link, useLocation } from 'react-router'

export const AppPrivateNav = () => {
  const location = useLocation()

  // Détermine si on est sur la liste d'amis (page principale @me)
  const isOnFriendList =
    location.pathname === paths.app.personal.getHref() || location.pathname === `${paths.app.personal.getHref()}/`

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
          <Link to={paths.app.personal.getHref()}>
            <Button
              size="sm"
              className={cn(
                'group text-md h-[38px] w-full justify-start gap-2 border-0 py-0 transition-none hover:bg-gray-700',
                isOnFriendList ? 'bg-gray-630 text-gray-130' : 'bg-transparent text-gray-400',
              )}
            >
              <FriendIcon className="size-5" />
              <p className={isOnFriendList ? 'text-gray-130' : 'group-hover:text-gray-130'}>Amis</p>
            </Button>
          </Link>
        </div>

        {/* Separator */}
        <div className="bg-gray-660 my-2 h-px w-full"></div>

        {/* Conversations privées */}
        <div className="flex flex-1 flex-col gap-0.5">
          <h4 className="hover:text-gray-130 cursor-default text-sm font-medium text-gray-400">Messages privés</h4>
        </div>
      </ScrollArea>
    </nav>
  )
}
