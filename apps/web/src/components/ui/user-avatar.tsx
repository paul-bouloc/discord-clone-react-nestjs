import discordLogo from '@/assets/discord-mark-white.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { useMemo } from 'react'

interface UserAvatarProps {
  src?: string
  size?: number
  className?: string
}

const fallbackPalette = [
  '#5865F2',
  '#6D82FF',
  '#7289DA',
  '#60B6FF',
  '#43B581',
  '#5ED1BA',
  '#F4A261',
  '#F18F6C',
  '#ED6A5E',
  '#F278C0',
] as const

export const UserAvatar = ({ src, size = 32, className }: UserAvatarProps) => {
  const fallbackColor = useMemo(() => fallbackPalette[Math.floor(Math.random() * fallbackPalette.length)], [])
  const dimension = size
  const logoSize = Math.max(14, Math.round(dimension * 0.55))

  return (
    <Avatar className={className} style={{ width: dimension, height: dimension }}>
      <AvatarImage src={src ?? undefined} />
      <AvatarFallback
        className={cn('flex size-full items-center justify-center text-white')}
        style={{ backgroundColor: fallbackColor }}
      >
        <img src={discordLogo} alt="Discord logo" style={{ width: logoSize, height: logoSize }} />
      </AvatarFallback>
    </Avatar>
  )
}
