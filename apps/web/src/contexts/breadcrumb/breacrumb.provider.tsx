import { BreadcrumbContext } from '@/contexts/breadcrumb/breadcrumb.context'
import type { BreadcrumbContextType, BreadcrumbState } from '@/contexts/breadcrumb/breadcrumb.types'
import { useState } from 'react'

interface BreadcrumbProviderProps {
  children: React.ReactNode
}

export const BreadcrumbProvider = ({ children }: BreadcrumbProviderProps) => {
  const [breadcrumb, setBreadcrumbState] = useState<BreadcrumbState>({
    icon: null,
    text: '',
  })

  const setBreadcrumb = (icon: BreadcrumbState['icon'], text: string) => {
    setBreadcrumbState({ icon, text })
  }

  const clearBreadcrumb = () => {
    setBreadcrumbState({ icon: null, text: '' })
  }

  const value: BreadcrumbContextType = {
    breadcrumb,
    setBreadcrumb,
    clearBreadcrumb,
  }

  return <BreadcrumbContext.Provider value={value}>{children}</BreadcrumbContext.Provider>
}
