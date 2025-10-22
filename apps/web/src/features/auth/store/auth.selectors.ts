import type { RootState } from '@/app/store'

export const selectAuth = (s: RootState) => s.auth
export const selectUser = (s: RootState) => s.auth.user
export const selectIsAuthenticated = (s: RootState) => s.auth.isAuthenticated
export const selectAuthLoading = (s: RootState) => s.auth.isLoading
export const selectAuthError = (s: RootState) => s.auth.error
