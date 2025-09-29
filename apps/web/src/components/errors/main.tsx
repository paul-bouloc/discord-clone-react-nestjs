import { Button } from '@/components/ui/button/button'

export const MainErrorFallback = () => {
  return (
    <div className="bg-black-600 flex h-screen flex-col items-center justify-center">
      <img src="/discord-mark-blue.svg" alt="discord mark" className="mb-4 h-16 w-16" />
      <h1 className="text-xl font-bold text-white uppercase">Une erreur est survenue</h1>
      <p className="text-base text-white">Veuillez réessayer plus tard.</p>

      <Button className="mt-4" onClick={() => window.location.reload()}>
        Réessayer
      </Button>
    </div>
  )
}
