import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * مكون حقل النص المتعدد الأسطر
 */
const Textarea = forwardRef(({ 
  className, 
  error,
  ...props 
}, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[100px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm',
        'placeholder:text-gray-400',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
        'disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border-red-500 focus:ring-red-500',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }

