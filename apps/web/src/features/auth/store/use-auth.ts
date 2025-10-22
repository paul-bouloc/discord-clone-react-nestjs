import { useAppSelector } from '@/app/hook'
import { selectAuth } from './auth.selectors'

export function useAuth() {
  return useAppSelector(selectAuth)
}
