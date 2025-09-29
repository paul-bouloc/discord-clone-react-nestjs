import { useAuth } from '@/contexts/auth/auth.hook'

export default function OverviewPage() {
  const { user } = useAuth()

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Vue d&apos;ensemble</h1>
        <p className="mt-1 text-gray-400">Bienvenue, {user?.email} ! Voici votre espace personnel Discord Clone.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white">Serveurs</h3>
          <p className="mt-2 text-gray-400">Gérez vos serveurs et communautés</p>
          <div className="mt-4">
            <span className="text-sm text-gray-500">Aucun serveur pour le moment</span>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white">Messages</h3>
          <p className="mt-2 text-gray-400">Vos conversations récentes</p>
          <div className="mt-4">
            <span className="text-sm text-gray-500">Aucun message récent</span>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white">Amis</h3>
          <p className="mt-2 text-gray-400">Connectez-vous avec vos amis</p>
          <div className="mt-4">
            <span className="text-sm text-gray-500">Aucun ami en ligne</span>
          </div>
        </div>
      </div>
    </div>
  )
}
