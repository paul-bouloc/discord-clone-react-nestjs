import { FriendListRequestTable } from '@/features/friends/components/friend-request/friend-list-request-table'
import { AddFriendForm } from '../components/add-friend-form'
import { FriendListTable } from '../components/friend-list/friend-list-table'

export type FriendTabId = 'all' | 'add' | 'requests'

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
    id: 'requests',
    label: 'Demandes',
    component: FriendListRequestTable,
  },
  {
    id: 'add',
    label: 'Ajouter',
    component: AddFriendForm,
    customStyle: {
      selected: 'text-brand-430 bg-brand-500/15 hover:bg-brand-500/15',
      unselected: 'text-white bg-brand-500 hover:bg-brand-560',
    },
  },
]

export const DEFAULT_TAB: FriendTabId = 'all'
