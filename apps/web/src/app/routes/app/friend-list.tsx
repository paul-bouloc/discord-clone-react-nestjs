import { FriendIcon } from '@/components/icons/friend-icon'
import { useAuth } from '@/contexts/auth/auth.hook'
import { useBreadcrumb } from '@/contexts/breadcrumb'
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
