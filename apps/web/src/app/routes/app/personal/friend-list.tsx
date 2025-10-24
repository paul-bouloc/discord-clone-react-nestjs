import { FriendIcon } from '@/components/icons/friend-icon'
import { useBreadcrumb } from '@/contexts/breadcrumb'
import { useAuth } from '@/features/auth/store/use-auth'
import { useEffect } from 'react'

export default function FriendListPage() {
  const { setBreadcrumb } = useBreadcrumb()
  const { user } = useAuth()

  useEffect(() => {
    setBreadcrumb(FriendIcon, 'Amis')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>FriendListPage</h1>
      <p>{user?.email}</p>
    </div>
  )
}
