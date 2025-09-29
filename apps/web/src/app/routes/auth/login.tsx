import { Link } from 'react-router'

export default function LoginPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-center text-3xl font-extrabold text-white">Connexion</h2>
        <p className="mt-2 text-center text-gray-400">Connectez-vous à votre compte Discord Clone</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-md bg-gray-800 p-8">
          <p className="text-center text-white">
            Page de connexion - Seuls les utilisateurs non connectés peuvent y accéder
          </p>
          <div className="mt-4 text-center">
            <Link to="/auth/register" className="text-blue-400 hover:text-blue-300">
              Pas de compte ? S&apos;inscrire
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
