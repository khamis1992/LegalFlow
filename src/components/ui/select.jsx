import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * مكون القائمة المنسدلة
 */
const Select = forwardRef(({ 
  className, 
  children,
  error,
  ...props 
}, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
        'disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border-red-500 focus:ring-red-500',
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
})

Select.displayName = 'Select'

/**
 * مكون خيار القائمة المنسدلة
 */
const SelectOption = forwardRef(({ className, ...props }, ref) => (
  <option
    ref={ref}
    className={cn('', className)}
    {...props}
  />
))

SelectOption.displayName = 'SelectOption'

export { Select, SelectOption }

