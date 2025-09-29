import { Outlet } from 'react-router'

interface AuthPageLayoutProps {
  children?: React.ReactNode
}

export const AuthPageLayout = ({ children }: AuthPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header commun pour toutes les pages d'auth */}
      <header className="border-b border-gray-700 bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/discord-mark-blue.svg" alt="Discord" className="h-8 w-8" />
              <h1 className="text-xl font-bold text-white">Discord Clone</h1>
            </div>
            <div className="text-sm text-gray-400">Authentification</div>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center">
        <div className="w-full max-w-md">{children || <Outlet />}</div>
      </main>

      {/* Footer commun pour toutes les pages d'auth */}
      <footer className="border-t border-gray-700 bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <p className="text-center text-sm text-gray-400">© 2024 Discord Clone. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
