import { useAppSelector } from '@/state'
import { selectAuth } from './auth.selectors'

export function useAuth() {
  return useAppSelector(selectAuth)
}
