import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-default placeholder:text-muted-foreground selection:text-primary-foreground border-gray-530/80 h-11 w-full min-w-0 rounded-md border bg-gray-700/50 px-3 py-2.5 text-base shadow-xs transition-[color,box-shadow] transition-all outline-none selection:bg-blue-300 file:inline-flex file:h-7 file:border-0 file:bg-gray-800/40 file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-gray-800/40',
        'focus-visible:border-link',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
