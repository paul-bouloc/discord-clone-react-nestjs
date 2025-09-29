import { Loading } from '@/app/loading'
import { MainErrorFallback } from '@/components/errors/main'
import { Toaster } from '@/components/ui/sonner'
import { AuthProvider } from '@/contexts/auth/auth.provider'
import { queryConfig } from '@/lib/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  )

  return (
    <React.Suspense fallback={<Loading />}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <Toaster />
              <ReactQueryDevtools initialIsOpen={false} />
              {children}
            </AuthProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}
