import { useIsMobile } from '@/lib/hooks/use-is-mobile'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { Outlet, useLocation, useOutlet } from 'react-router'

interface AuthPageLayoutProps {
  children?: React.ReactNode
}

const variants: Variants = {
  initial: { opacity: 0, y: -28, scale: 0.985 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      opacity: { duration: 0.08, ease: [0, 0, 1, 1] },
      y: { type: 'spring', stiffness: 600, damping: 15, mass: 0.9, bounce: 0.2 },
      scale: { type: 'spring', stiffness: 600, damping: 15, mass: 0.9, bounce: 0.2 },
    },
  },
  exit: {
    opacity: 0,
    y: -28,
    scale: 0.985,
    transition: {
      duration: 0.14,
      ease: [0.4, 0, 1, 1],
    },
  },
}

export const AuthPageLayout = ({ children }: AuthPageLayoutProps) => {
  const isMobile = useIsMobile()
  const location = useLocation()
  const outletEl = useOutlet()

  if (isMobile) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-start bg-gradient-to-tr from-[#1e1e23] to-[#3d4046] px-4 py-5">
        <img src="/src/assets/discord_full_white.svg" alt="discord logo" className="mb-4 h-9 w-[130px]" />
        {children || <Outlet />}
      </div>
    )
  }

  return (
    <div className="relative min-h-screen w-full bg-[url('assets/bg_artwork.svg')] bg-cover bg-left">
      <img
        src="/src/assets/discord_full_white.svg"
        alt="discord logo"
        className="absolute top-12 left-12 h-6 w-[124px]"
      />

      {/* PASSAGE EN GRID : centre le contenu et permet la superposition sans étirer la hauteur */}
      <div className="relative mx-auto grid min-h-screen w-full max-w-[1100px] place-items-center overflow-hidden px-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            // Important: pas de absolute/inset-0 -> garde la hauteur naturelle du bloc
            className="col-start-1 row-start-1 flex w-full justify-center"
            style={{ willChange: 'transform, opacity' }}
          >
            {children ?? outletEl}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
