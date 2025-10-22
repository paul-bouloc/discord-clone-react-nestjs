import { useAppDispatch } from '@/app/hook'
import { Loading } from '@/app/loading'
import { MainErrorFallback } from '@/components/errors/main'
import { Toaster } from '@/components/ui/sonner'
import { BreadcrumbProvider } from '@/contexts/breadcrumb'
import { loadSelfUser } from '@/features/auth/store'
import { queryConfig } from '@/lib/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { useEffect } from 'react'
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

  const dispatch = useAppDispatch()

  useEffect(() => {
    // Charge l’utilisateur dès que l’app démarre
    void dispatch(loadSelfUser())
  }, [dispatch])

  return (
    <React.Suspense fallback={<Loading />}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <BreadcrumbProvider>
              <Toaster />
              <ReactQueryDevtools initialIsOpen={false} />
              {children}
            </BreadcrumbProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}
