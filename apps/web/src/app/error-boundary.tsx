import { Button } from '@/components/ui/button/button'

interface ErrorBoundaryProps {
  title?: string
  message?: string
  showRetry?: boolean
}

export function ErrorBoundary({
  title = 'Une erreur est survenue',
  message = 'Veuillez réessayer plus tard',
  showRetry = true,
}: ErrorBoundaryProps) {
  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="text-center">
        <img src="/discord-mark-blue.svg" alt="discord mark" className="mx-auto mb-4 h-16 w-16" />
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="mt-2 text-gray-400">{message}</p>

        {showRetry && (
          <Button className="mt-4" onClick={handleRetry}>
            Réessayer
          </Button>
        )}
      </div>
    </div>
  )
}
