import { FriendIcon } from '@/components/icons/friend-icon'
import { useBreadcrumb } from '@/contexts/breadcrumb'
import { FriendListHeader } from '@/features/friends/components/friend-list/friend-list-header'
import type { FriendTabId } from '@/features/friends/config/friend-tabs.config'
import { DEFAULT_TAB, FRIEND_TABS } from '@/features/friends/config/friend-tabs.config'
import { useEffect, useState } from 'react'

export default function FriendListPage() {
  const { setBreadcrumb } = useBreadcrumb()
  const [activeTab, setActiveTab] = useState<FriendTabId>(DEFAULT_TAB)

  useEffect(() => {
    setBreadcrumb(FriendIcon, 'Amis')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTabChange = (tab: FriendTabId) => {
    setActiveTab(tab)
  }

  // Trouve le composant correspondant à l'onglet actif
  const activeTabConfig = FRIEND_TABS.find((tab) => tab.id === activeTab)
  const ActiveComponent = activeTabConfig?.component

  return (
    <div className="flex flex-1 flex-col">
      <FriendListHeader activeTab={activeTab} onTabChange={handleTabChange} />
      {ActiveComponent && <ActiveComponent />}
    </div>
  )
}
