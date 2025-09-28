import { Button } from '@/components/ui/button/button'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <p>app</p>
      <Button>Click me</Button>
      <div className="flex py-2">
        <div className="bg-black-100 flex h-6 w-6"></div>
        <div className="bg-black-130 flex h-6 w-6"></div>
        <div className="bg-black-160 flex h-6 w-6"></div>
        <div className="bg-black-200 flex h-6 w-6"></div>
        <div className="bg-black-230 flex h-6 w-6"></div>
        <div className="bg-black-260 flex h-6 w-6"></div>
        <div className="bg-black-300 flex h-6 w-6"></div>
        <div className="bg-black-330 flex h-6 w-6"></div>
        <div className="bg-black-345 flex h-6 w-6"></div>
        <div className="bg-black-360 flex h-6 w-6"></div>
        <div className="bg-black-400 flex h-6 w-6"></div>
        <div className="bg-black-430 flex h-6 w-6"></div>
        <div className="bg-black-460 flex h-6 w-6"></div>
        <div className="bg-black-500 flex h-6 w-6"></div>
        <div className="bg-black-530 flex h-6 w-6"></div>
        <div className="bg-black-560 flex h-6 w-6"></div>
        <div className="bg-black-600 flex h-6 w-6"></div>
        <div className="bg-black-630 flex h-6 w-6"></div>
        <div className="bg-black-660 flex h-6 w-6"></div>
        <div className="bg-black-700 flex h-6 w-6"></div>
        <div className="bg-black-730 flex h-6 w-6"></div>
        <div className="bg-black-760 flex h-6 w-6"></div>
        <div className="bg-black-800 flex h-6 w-6"></div>
        <div className="bg-black-830 flex h-6 w-6"></div>
        <div className="bg-black-860 flex h-6 w-6"></div>
        <div className="bg-black-900 flex h-6 w-6"></div>
      </div>

      <div className="flex py-2">
        <div className="flex h-6 w-6 bg-gray-100"></div>
        <div className="bg-gray-130 flex h-6 w-6"></div>
        <div className="bg-gray-160 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-gray-200"></div>
        <div className="bg-gray-230 flex h-6 w-6"></div>
        <div className="bg-gray-260 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-gray-300"></div>
        <div className="bg-gray-330 flex h-6 w-6"></div>
        <div className="bg-gray-345 flex h-6 w-6"></div>
        <div className="bg-gray-360 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-gray-400"></div>
        <div className="bg-gray-430 flex h-6 w-6"></div>
        <div className="bg-gray-460 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-gray-500"></div>
        <div className="bg-gray-530 flex h-6 w-6"></div>
        <div className="bg-gray-560 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-gray-600"></div>
        <div className="bg-gray-630 flex h-6 w-6"></div>
        <div className="bg-gray-660 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-gray-700"></div>
        <div className="bg-gray-730 flex h-6 w-6"></div>
        <div className="bg-gray-760 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-gray-800"></div>
        <div className="bg-gray-830 flex h-6 w-6"></div>
        <div className="bg-gray-860 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-gray-900"></div>
      </div>

      <div className="flex py-2">
        <div className="flex h-6 w-6 bg-blue-100"></div>
        <div className="bg-blue-130 flex h-6 w-6"></div>
        <div className="bg-blue-160 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-blue-200"></div>
        <div className="bg-blue-230 flex h-6 w-6"></div>
        <div className="bg-blue-260 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-blue-300"></div>
        <div className="bg-blue-330 flex h-6 w-6"></div>
        <div className="bg-blue-345 flex h-6 w-6"></div>
        <div className="bg-blue-360 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-blue-400"></div>
        <div className="bg-blue-430 flex h-6 w-6"></div>
        <div className="bg-blue-460 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-blue-500"></div>
        <div className="bg-blue-530 flex h-6 w-6"></div>
        <div className="bg-blue-560 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-blue-600"></div>
        <div className="bg-blue-630 flex h-6 w-6"></div>
        <div className="bg-blue-660 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-blue-700"></div>
        <div className="bg-blue-730 flex h-6 w-6"></div>
        <div className="bg-blue-760 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-blue-800"></div>
        <div className="bg-blue-830 flex h-6 w-6"></div>
        <div className="bg-blue-860 flex h-6 w-6"></div>
        <div className="flex h-6 w-6 bg-blue-900"></div>
      </div>

      <div className="flex py-2">
        <div className="bg-brand-100 flex h-6 w-6"></div>
        <div className="bg-brand-130 flex h-6 w-6"></div>
        <div className="bg-brand-160 flex h-6 w-6"></div>
        <div className="bg-brand-200 flex h-6 w-6"></div>
        <div className="bg-brand-230 flex h-6 w-6"></div>
        <div className="bg-brand-260 flex h-6 w-6"></div>
        <div className="bg-brand-300 flex h-6 w-6"></div>
        <div className="bg-brand-330 flex h-6 w-6"></div>
        <div className="bg-brand-345 flex h-6 w-6"></div>
        <div className="bg-brand-360 flex h-6 w-6"></div>
        <div className="bg-brand-400 flex h-6 w-6"></div>
        <div className="bg-brand-430 flex h-6 w-6"></div>
        <div className="bg-brand-460 flex h-6 w-6"></div>
        <div className="bg-brand-500 flex h-6 w-6"></div>
        <div className="bg-brand-530 flex h-6 w-6"></div>
        <div className="bg-brand-560 flex h-6 w-6"></div>
        <div className="bg-brand-600 flex h-6 w-6"></div>
        <div className="bg-brand-630 flex h-6 w-6"></div>
        <div className="bg-brand-660 flex h-6 w-6"></div>
        <div className="bg-brand-700 flex h-6 w-6"></div>
        <div className="bg-brand-730 flex h-6 w-6"></div>
        <div className="bg-brand-760 flex h-6 w-6"></div>
        <div className="bg-brand-800 flex h-6 w-6"></div>
        <div className="bg-brand-830 flex h-6 w-6"></div>
        <div className="bg-brand-860 flex h-6 w-6"></div>
        <div className="bg-brand-900 flex h-6 w-6"></div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
