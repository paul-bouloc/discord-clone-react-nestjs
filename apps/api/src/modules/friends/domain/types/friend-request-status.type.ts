export const FriendRequestStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
} as const

export type FriendRequestStatus = (typeof FriendRequestStatus)[keyof typeof FriendRequestStatus]

