import { useAuth } from '@/contexts/auth/auth.hook'

export default function ProfilePage() {
  const { user } = useAuth()

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Profil</h1>
        <p className="mt-1 text-gray-400">Gérez vos informations personnelles et paramètres de compte</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">Informations du compte</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <p className="mt-1 text-white">{user?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">ID utilisateur</label>
              <p className="mt-1 font-mono text-sm text-gray-400">{user?.userId}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">Paramètres</h2>
          <div className="space-y-4">
            <div className="text-gray-400">
              <p>Les paramètres avancés seront disponibles prochainement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
