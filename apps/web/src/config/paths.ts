export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    root: {
      path: '/auth',
      getHref: () => '/auth',
    },
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    profile: {
      path: 'profile',
      getHref: () => '/app/profile',
    },
    servers: {
      path: 'servers',
      getHref: (id: string) => `/app/servers/${id}`,
    },
  },
} as const
