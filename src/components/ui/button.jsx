import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * مكون الزر - Button Component
 * @param {string} variant - نوع الزر (default, primary, secondary, ghost, danger)
 * @param {string} size - حجم الزر (sm, md, lg)
 */
const Button = forwardRef(({ 
  className, 
  variant = 'default', 
  size = 'md', 
  disabled,
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    default: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }

