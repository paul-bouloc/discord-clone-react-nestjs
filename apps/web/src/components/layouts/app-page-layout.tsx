import { Link, Outlet } from 'react-router'

interface AppPageLayoutProps {
  children?: React.ReactNode
}

export const AppPageLayout = ({ children }: AppPageLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-700 bg-gray-800">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <img src="/discord-mark-blue.svg" alt="Discord" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-white">Discord Clone</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <Link
            to="/app"
            className="block px-4 py-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
          >
            Vue d&apos;ensemble
          </Link>
          <Link
            to="/app/profile"
            className="block px-4 py-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
          >
            Profil
          </Link>
        </nav>

        {/* Section serveurs (pour plus tard) */}
        <div className="mt-8 px-4">
          <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Serveurs</h3>
          <div className="mt-2 space-y-1">
            <div className="text-sm text-gray-400">Aucun serveur pour le moment</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header de l'app */}
        <header className="border-b border-gray-700 bg-gray-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Discord Clone</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Connecté</span>
            </div>
          </div>
        </header>

        {/* Contenu principal */}
        <main className="flex-1 overflow-auto">{children || <Outlet />}</main>
      </div>
    </div>
  )
}
