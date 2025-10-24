export type QueryKey = readonly unknown[]

export const createQueryKey = <T extends QueryKey>(key: T): T => key

export interface QueryConfig {
  /** Temps avant que les données soient considérées comme obsolètes (en ms) */
  staleTime?: number
  /** Temps de cache (en ms) */
  gcTime?: number
  /** Nombre de tentatives en cas d'erreur */
  retry?: number | boolean
  /** Lancer une erreur si la query échoue */
  throwOnError?: boolean
  /** Activer la query automatiquement */
  enabled?: boolean
  /** Fonction de retry personalisée */
  retryOnMount?: boolean
}

export interface MutationConfig {
  /** Invalider les queries après succès */
  invalidateOnSuccess?: boolean | string[]
  /** Invalider les queries après erreur */
  invalidateOnError?: boolean | string[]
}
