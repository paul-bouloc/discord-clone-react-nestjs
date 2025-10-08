import { useBreadcrumb } from '@/contexts/breadcrumb'

export const AppBreadcrumb = () => {
  const { breadcrumb } = useBreadcrumb()

  const IconComponent = breadcrumb.icon

  return (
    <div className="flex h-8 items-center justify-center gap-2 bg-gray-800">
      {IconComponent && <IconComponent size={15} className="text-gray-400" />}
      {breadcrumb.text && <p className="text-sm font-medium text-gray-200">{breadcrumb.text}</p>}
    </div>
  )
}
