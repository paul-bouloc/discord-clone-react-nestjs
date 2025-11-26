import { ScrollArea } from '@/components/ui/scroll-area'
import { useFriendships } from '@/features/friends/api/get-friendships.api'
import { FriendListItem } from '@/features/friends/components/friend-list/friend-list-item'
import { FriendListSearchbar } from '@/features/friends/components/friend-list/friend-list-searchbar'
import { useSelfUser } from '@/features/profile/api/get-self-user.api'

export const FriendListTable = () => {
  const { data: friendships, isPending, isError } = useFriendships()
  const { data: currentUser } = useSelfUser()

  if (isPending) {
    return (
      <div>
        <FriendListSearchbar />
        <div className="px-4 py-2 text-gray-400">Chargement...</div>
      </div>
    )
  }

  if (isError || !friendships) {
    return (
      <div>
        <FriendListSearchbar />
        <div className="px-4 py-2 text-red-400">Erreur lors du chargement des amis</div>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <FriendListSearchbar />
      {friendships.length === 0 ? (
        <div className="flex w-full flex-1 items-center justify-center text-gray-400">
          <p>Aucun ami pour le moment</p>
        </div>
      ) : (
        <ScrollArea className="flex h-full min-h-0 flex-col" scrollBarClassName="w-2.5">
          <h2 className="text-gray-160 my-4 mr-5 ml-6 text-sm font-medium">
            Tous les amis <span className="font-normal">—</span> {friendships.length}
          </h2>
          {friendships.map((friendship) => (
            <FriendListItem key={friendship.friendshipId} friendship={friendship} currentUserId={currentUser?.userId} />
          ))}
        </ScrollArea>
      )}
    </div>
  )
}
