import { Button } from '@/components/ui/button/button'
import { useNavigate } from 'react-router'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="bg-black-600 flex h-screen flex-col items-center justify-center">
      <img src="/discord-mark-blue.svg" alt="discord mark" className="mb-4 h-16 w-16" />
      <h1 className="text-xl font-bold text-white uppercase">Page non trouvée</h1>
      <p className="text-base text-white">La page que vous cherchez n&apos;existe pas.</p>

      <Button className="mt-4" onClick={() => navigate('/')}>
        Retour à l&apos;accueil
      </Button>
    </div>
  )
}
