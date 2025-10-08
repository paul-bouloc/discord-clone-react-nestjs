import { type ComponentType } from 'react'

export interface BreadcrumbIconProps {
  className?: string
  size?: number | string
  color?: string
  fill?: string
  stroke?: string
  strokeWidth?: number
  width?: number | string
  height?: number | string
}

export type BreadcrumbIcon = ComponentType<BreadcrumbIconProps>

export interface BreadcrumbState {
  icon: BreadcrumbIcon | null
  text: string
}

export interface BreadcrumbContextType {
  breadcrumb: BreadcrumbState
  setBreadcrumb: (icon: BreadcrumbIcon | null, text: string) => void
  clearBreadcrumb: () => void
}
