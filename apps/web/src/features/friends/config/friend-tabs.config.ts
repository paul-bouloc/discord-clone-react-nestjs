import { FriendListAddNewForm } from '../components/friend-list/friend-list-add-new-form'
import { FriendListTable } from '../components/friend-list/friend-list-table'

export type FriendTabId = 'all' | 'add'

export interface FriendTab {
  id: FriendTabId
  label: string
  component: React.ComponentType
  customStyle?: {
    selected: string
    unselected: string
  }
}

export const FRIEND_TABS: FriendTab[] = [
  {
    id: 'all',
    label: 'Tous',
    component: FriendListTable,
  },
  {
    id: 'add',
    label: 'Ajouter',
    component: FriendListAddNewForm,
    customStyle: {
      selected: 'text-brand-430 bg-brand-500/15 hover:bg-brand-500/15',
      unselected: 'text-white bg-brand-500 hover:bg-brand-560',
    },
  },
]

export const DEFAULT_TAB: FriendTabId = 'all'
