import { Button } from '@/components/ui/button/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-router'

interface AppPrivateNavSubmenuItemProps {
  isSelected: boolean
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}

export const AppPrivateNavSubmenuItem = ({ isSelected, href, icon, children }: AppPrivateNavSubmenuItemProps) => {
  return (
    <Link to={href}>
      <Button
        size="sm"
        className={cn(
          'group text-md h-[38px] w-full justify-start gap-2 border-0 py-0 transition-none hover:bg-gray-700',
          isSelected ? 'bg-gray-630 text-gray-130' : 'bg-transparent text-gray-400',
        )}
      >
        {icon}
        <p className={isSelected ? 'text-gray-130' : 'group-hover:text-gray-130'}>{children}</p>
      </Button>
    </Link>
  )
}
