import { useIsMobile } from '@/lib/hooks/use-is-mobile'
import { Outlet } from 'react-router'

interface AuthPageLayoutProps {
  children?: React.ReactNode
}

export const AuthPageLayout = ({ children }: AuthPageLayoutProps) => {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-start bg-gradient-to-tr from-[#1e1e23] to-[#3d4046] px-4 py-5">
        <img src="/src/assets/discord_full_white.svg" alt="discord logo" className="mb-4 h-9 w-[130px]" />
        {children || <Outlet />}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[url('assets/bg_artwork.svg')] bg-cover bg-left">
      <img
        src="/src/assets/discord_full_white.svg"
        alt="discord logo"
        className="absolute top-12 left-12 h-6 w-[124px]"
      />
      {children || <Outlet />}
    </div>
  )
}
