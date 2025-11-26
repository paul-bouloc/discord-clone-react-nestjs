import { FriendListRequestItem } from '@/features/friends/components/friend-request/friend-list-request-item'

export const FriendListRequestTable = () => {
  return (
    <div className="flex flex-1 flex-col">
      <FriendListRequestItem />
      <FriendListRequestItem />
      <FriendListRequestItem />
    </div>
  )
}
