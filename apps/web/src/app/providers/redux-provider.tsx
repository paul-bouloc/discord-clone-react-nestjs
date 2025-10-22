import { store } from '@/app/store'
import type { ReactNode } from 'react'
import { Provider } from 'react-redux'

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}
