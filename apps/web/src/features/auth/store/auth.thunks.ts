import { getSelfUser } from '@/features/profile/api/get-self-user.api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export const loadSelfUser = createAsyncThunk('auth/loadSelfUser', async (_, { rejectWithValue }) => {
  try {
    const user = await getSelfUser()
    return user
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      return rejectWithValue(e.response?.data?.message ?? 'Erreur inattendue')
    }
    return rejectWithValue('Erreur inattendue')
  }
})
