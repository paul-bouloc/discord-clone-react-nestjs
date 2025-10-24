import { Button } from '@/components/ui/button/button'

export const AppPrivateNav = () => {
  return (
    <nav className="border-gray-660 flex flex-1 flex-col rounded-tl-lg border-t border-l">
      {/* Search header */}
      <div className="border-gray-660 border-b px-2 pt-2 pb-[7px]">
        <Button size="sm" className="bg-gray-660 hover:bg-gray-630 w-full border-0 py-0 text-sm text-gray-200">
          Rechercher/lancer une conversation
        </Button>
      </div>
    </nav>
  )
}
