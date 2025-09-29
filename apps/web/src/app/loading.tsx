import { Spinner } from '@/components/ui/spinner'

export const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-600">
      <Spinner size={48} />
    </div>
  )
}
