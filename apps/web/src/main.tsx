import { ReduxProvider } from '@/app/providers/redux-provider.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/index.tsx'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </StrictMode>,
)
