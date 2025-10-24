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
      path: '/channels',
      getHref: () => '/channels',
    },
    personal: {
      root: {
        path: '@me',
        getHref: () => '/channels/@me',
      },
      channel: {
        path: ':channelId',
        getHref: (channelId: string) => `/channels/@me/${channelId}`,
      },
    },
    server: {
      path: ':serverId',
      getHref: (serverId: string) => `/channels/${serverId}`,
    },
  },
} as const
