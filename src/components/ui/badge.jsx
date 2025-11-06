import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * مكون الشارة - Badge Component
 * @param {string} variant - نوع الشارة (default, primary, success, warning, danger)
 */
const Badge = forwardRef(({ 
  className, 
  variant = 'default',
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-gray-100 text-gray-900',
    primary: 'bg-primary-100 text-primary-900',
    success: 'bg-green-100 text-green-900',
    warning: 'bg-yellow-100 text-yellow-900',
    danger: 'bg-red-100 text-red-900',
    info: 'bg-blue-100 text-blue-900',
  }

  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variants[variant],
        className
      )}
      {...props}
    />
  )
})

Badge.displayName = 'Badge'

export { Badge }

