interface FriendIconProps {
  className?: string
  size?: number | string
  color?: string
  fill?: string
  stroke?: string
  strokeWidth?: number
  width?: number | string
  height?: number | string
}

export const FriendIcon = ({
  className,
  size = 16,
  color,
  fill = 'currentColor',
  stroke,
  strokeWidth,
  width,
  height,
}: FriendIconProps) => {
  const iconSize = typeof size === 'number' ? size : size
  const iconWidth = width || iconSize
  const iconHeight = height || iconSize

  return (
    <svg
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 24 24"
      className={className}
      style={{
        color: color,
        fill: fill,
        stroke: stroke,
        strokeWidth: strokeWidth,
      }}
    >
      <path d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z" />
    </svg>
  )
}
