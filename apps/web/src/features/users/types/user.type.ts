import type { UserId } from '@/types/ids.type'

export interface User {
  userId: UserId
  userName: string
  displayName: string | null
  email: string
  birthDate: Date
  createdAt: Date
  updatedAt: Date
}
