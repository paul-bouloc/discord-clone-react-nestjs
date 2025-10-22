import type { User } from '@/features/users/types/user.type'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthState } from '../types/auth-state.type'
import { loadSelfUser } from './auth.thunks'

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload
      state.isAuthenticated = Boolean(action.payload)
      state.error = null
    },
    logout(state) {
      state.user = null
      state.isAuthenticated = false
      state.error = null
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSelfUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loadSelfUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(loadSelfUser.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
        state.error = (action.payload as string) ?? 'Vous devez être connecté pour accéder à cette page'
      })
  },
})

export const { setUser, logout, setError } = authSlice.actions
export const authReducer = authSlice.reducer
