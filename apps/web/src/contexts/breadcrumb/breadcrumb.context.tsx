import { createContext, useContext } from 'react'
import { type BreadcrumbContextType } from './breadcrumb.types'

export const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined)

export const useBreadcrumb = (): BreadcrumbContextType => {
  const context = useContext(BreadcrumbContext)
  if (context === undefined) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider')
  }
  return context
}
