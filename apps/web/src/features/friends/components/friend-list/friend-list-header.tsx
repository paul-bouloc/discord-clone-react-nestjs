import { FriendIcon } from '@/components/icons/friend-icon'
import { Button } from '@/components/ui/button/button'
import { cn } from '@/lib/utils'
import type { FriendTabId } from '../../config/friend-tabs.config'
import { FRIEND_TABS } from '../../config/friend-tabs.config'

interface FriendListHeaderProps {
  activeTab: FriendTabId
  onTabChange: (tab: FriendTabId) => void
}

export const FriendListHeader = ({ activeTab, onTabChange }: FriendListHeaderProps) => {
  return (
    <div className="border-gray-645 flex h-[49px] items-center gap-2 border-y px-4">
      <FriendIcon className="size-5 text-gray-400" />
      <h1 className="text-gray-130 font-medium">Amis</h1>
      <span className="text-gray-500">•</span>

      {/* Onglets */}
      <div className="flex gap-1">
        {FRIEND_TABS.map((tab) => {
          const isSelected = activeTab === tab.id
          const hasCustomStyle = tab.customStyle

          // Styles par défaut
          const defaultSelectedStyle = 'border-none text-gray-130 bg-gray-630 hover:bg-gray-630'
          const defaultUnselectedStyle =
            'border-none text-gray-400 hover:text-gray-130 hover:bg-gray-660 bg-transparent'

          // Utilise les styles personnalisés si disponibles, sinon les styles par défaut
          const selectedStyle = hasCustomStyle
            ? cn(defaultSelectedStyle, hasCustomStyle.selected)
            : defaultSelectedStyle
          const unselectedStyle = hasCustomStyle
            ? cn(defaultUnselectedStyle, hasCustomStyle.unselected)
            : defaultUnselectedStyle

          return (
            <Button
              key={tab.id}
              size="sm"
              variant={isSelected ? 'default' : 'ghost'}
              className={`rounded-md ${isSelected ? selectedStyle : unselectedStyle}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
