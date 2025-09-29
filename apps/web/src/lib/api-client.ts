import { env } from '@/config/env'
import { paths } from '@/config/paths'
import Axios, { type InternalAxiosRequestConfig } from 'axios'

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json'
  }

  config.withCredentials = true
  return config
}

export const api = Axios.create({
  baseURL: env.API_URL,
})

api.interceptors.request.use(authRequestInterceptor)
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const status = error.response?.status
    const url: string | undefined = error.config?.url

    const authEndpoints = ['/me', '/auth/login', '/auth/register', '/auth/logout']

    if (status === 401 && url && !authEndpoints.includes(url)) {
      const searchParams = new URLSearchParams()
      const redirectTo = searchParams.get('redirectTo') || window.location.pathname
      window.location.href = paths.auth.login.getHref(redirectTo)
      return
    }

    return Promise.reject(error)
  },
)
