import { FriendListItem } from '@/features/friends/components/friend-list/friend-list-item'
import { FriendListSearchbar } from '@/features/friends/components/friend-list/friend-list-searchbar'

export const FriendListTable = () => {
  return (
    <div>
      <FriendListSearchbar />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
    </div>
  )
}
