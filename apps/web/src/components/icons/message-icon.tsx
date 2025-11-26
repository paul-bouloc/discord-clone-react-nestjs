interface MessageIconProps {
  className?: string
  size?: number | string
  color?: string
  fill?: string
  stroke?: string
  strokeWidth?: number
  width?: number | string
  height?: number | string
}

export const MessageIcon = ({
  className,
  size = 16,
  color,
  fill = 'currentColor',
  stroke,
  strokeWidth,
  width,
  height,
}: MessageIconProps) => {
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
      <path d="M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z"></path>
    </svg>
  )
}
