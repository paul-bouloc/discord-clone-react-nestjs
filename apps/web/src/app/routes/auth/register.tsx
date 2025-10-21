import { paths } from '@/config/paths'
import RegisterForm from '@/features/auth/components/register-form'
import { Link } from 'react-router'

export default function RegisterPage() {
  return (
    <div className="sm:bg-gray-560 flex w-full max-w-lg flex-col sm:rounded-md sm:p-8 sm:shadow-lg">
      <div>
        <h2 className="mb-2 text-center text-2xl font-semibold text-white">Créer un compte</h2>
      </div>

      <div className="mt-5 flex w-full flex-col">
        <RegisterForm />
        <div className="mt-5 flex items-center gap-1 text-sm">
          <Link
            to={paths.auth.login.getHref()}
            className="text-brand-360 font-medium hover:underline hover:underline-offset-2"
          >
            Tu as déjà un compte ? Connecte-toi
          </Link>
        </div>
      </div>
    </div>
  )
}
