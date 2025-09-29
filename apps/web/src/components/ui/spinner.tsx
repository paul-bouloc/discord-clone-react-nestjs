import { LoaderCircle } from 'lucide-react'

interface SpinnerProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export const Spinner = ({ size = 24, color = 'var(--color-brand-500)', strokeWidth = 2 }: SpinnerProps) => {
  return <LoaderCircle className="animate-spin" size={size} color={color} strokeWidth={strokeWidth} />
}
