import LoginForm from '@/features/auth/components/login-form'
import { Link } from 'react-router'

export default function LoginPage() {
  return (
    <div className="sm:bg-gray-560 flex w-full max-w-lg flex-col sm:rounded-md sm:p-8 sm:shadow-lg">
      <div>
        <h2 className="mb-2 text-center text-2xl font-semibold text-white">Ha, te revoilà !</h2>
        <p className="text-gray-330 text-center text-base leading-5">Nous sommes si heureux de te revoir !</p>
      </div>

      <div className="mt-5 flex w-full flex-col">
        <LoginForm />
        <div className="mt-2 flex items-center gap-1 text-sm">
          <p className="text-gray-360">Besoin d&apos;un compte ?</p>
          <Link to="/auth/register" className="text-brand-360 font-medium hover:underline hover:underline-offset-2">
            S&apos;inscrire
          </Link>
        </div>
      </div>
    </div>
  )
}
