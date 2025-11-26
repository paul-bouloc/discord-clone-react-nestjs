import { MessageIcon } from '@/components/icons/message-icon'
import { UserAvatar } from '@/components/ui/user-avatar'
import { FriendListButton } from '@/features/friends/components/friend-list/friend-list-item-button'
import type { Friendship } from '@/features/friends/types/friendship.type'
import type { UserId } from '@/types/ids.type'
import { MoreVertical } from 'lucide-react'

interface FriendListItemProps {
  friendship: Friendship
  currentUserId?: UserId
}

export const FriendListItem = ({ friendship, currentUserId }: FriendListItemProps) => {
  // Déterminer quel utilisateur est l'ami (celui qui n'est pas l'utilisateur actuel)
  const friendUser = currentUserId === friendship.user1Id ? friendship.user2 : friendship.user1

  if (!friendUser) {
    return null
  }

  return (
    <div className="-mb-px flex flex-1 pr-3 pl-4">
      {/* hoverable */}
      <div className="group hover:bg-gray-645 flex h-16 flex-1 cursor-pointer items-center gap-2 rounded-lg px-2 transition-all duration-200">
        {/* content */}
        <div className="border-gray-645 flex h-full flex-1 items-center justify-between gap-2 border-y">
          {/* friend identity */}
          <div className="flex items-center gap-2">
            <UserAvatar src={friendUser.avatarUrl} size={38} />
            <div>
              <p className="text-gray-160 text-base font-medium">{friendUser.displayName}</p>
              <p className="text-gray-360 text-sm font-medium">{friendUser.userName}</p>
            </div>
          </div>
          {/* actions */}
          <div className="flex items-center gap-2">
            <FriendListButton
              icon={<MessageIcon className="size-5" />}
              tooltip="Envoyer un MP"
              onClick={() => {
                console.log('delete')
              }}
            />
            <FriendListButton
              icon={<MoreVertical className="size-5" />}
              tooltip="Plus"
              onClick={() => {
                console.log('delete')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
