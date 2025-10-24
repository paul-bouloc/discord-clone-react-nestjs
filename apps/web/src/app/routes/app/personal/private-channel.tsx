import { DiscordIcon } from '@/components/icons/discord-icon'
import { useBreadcrumb } from '@/contexts/breadcrumb'
import { useEffect } from 'react'

export default function PrivateChannelPage() {
  const { setBreadcrumb } = useBreadcrumb()

  useEffect(() => {
    setBreadcrumb(DiscordIcon, 'Messages privés')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>PrivateChannelPage</h1>
    </div>
  )
}
