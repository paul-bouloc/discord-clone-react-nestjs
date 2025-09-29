import { env } from '@/config/env'
import { paths } from '@/config/paths'
import Axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios'

// Types pour les réponses d'erreur de l'API
export interface ApiErrorResponse {
  message: string
  statusCode?: number
  error?: string
}

// Type guard pour vérifier si une erreur est une ApiErrorResponse
export function isApiErrorResponse(data: unknown): data is ApiErrorResponse {
  return (
    typeof data === 'object' &&
    data !== null &&
    'message' in data &&
    typeof (data as ApiErrorResponse).message === 'string'
  )
}

// Type pour les erreurs Axios avec notre API
export type ApiError = AxiosError<ApiErrorResponse>

// Utilitaire pour extraire le message d'erreur de manière propre
export function getApiErrorMessage(error: unknown): string {
  if (Axios.isAxiosError(error)) {
    const apiError = error as ApiError
    if (isApiErrorResponse(apiError.response?.data)) {
      return apiError.response.data.message
    }
    return apiError.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return "Une erreur inattendue s'est produite"
}

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
