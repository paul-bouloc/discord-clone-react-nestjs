import { UserId } from 'src/core/types'

export interface User {
  userId: UserId
  userName: string
  displayName: string | null
  email: string
  password?: string
  birthDate: Date
  createdAt: Date
  updatedAt: Date
}
