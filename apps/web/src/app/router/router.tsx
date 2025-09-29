import { ErrorBoundary } from '@/app/error-boundary'
import { Loading } from '@/app/loading'
import { convert } from '@/app/router/router.utils'
import { AppWrapper } from '@/components/layouts/app-wrapper'
import { AuthWrapper } from '@/components/layouts/auth-wrapper'
import { paths } from '@/config/paths'
import type { QueryClient } from '@tanstack/react-query'
import { createBrowserRouter, Navigate } from 'react-router'

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: () => import('../routes/home').then(convert(queryClient)),
      ErrorBoundary: () => <ErrorBoundary />,
      hydrateFallbackElement: <Loading />,
    },
    {
      path: paths.auth.root.path,
      element: <AuthWrapper />,
      ErrorBoundary: () => <ErrorBoundary />,
      hydrateFallbackElement: <Loading />,
      children: [
        {
          index: true,
          element: <Navigate to="/auth/login" replace />,
        },
        {
          path: paths.auth.login.path,
          lazy: () => import('../routes/auth/login').then(convert(queryClient)),
        },
        {
          path: paths.auth.register.path,
          lazy: () => import('../routes/auth/register').then(convert(queryClient)),
        },
      ],
    },
    {
      path: paths.app.root.path,
      element: <AppWrapper />,
      ErrorBoundary: () => <ErrorBoundary />,
      hydrateFallbackElement: <Loading />,
      children: [
        {
          index: true,
          lazy: () => import('../routes/app/overview').then(convert(queryClient)),
        },
        {
          path: paths.app.profile.path,
          lazy: () => import('../routes/app/profile').then(convert(queryClient)),
        },
      ],
    },
    {
      path: '*',
      lazy: () => import('../routes/not-found').then(convert(queryClient)),
    },
  ])
