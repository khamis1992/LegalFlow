import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * مكون البطاقة الرئيسي
 */
const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('bg-white rounded-lg border border-gray-200 shadow-sm', className)}
    {...props}
  />
))
Card.displayName = 'Card'

/**
 * رأس البطاقة
 */
const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-6 border-b border-gray-200', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

/**
 * عنوان البطاقة
 */
const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-xl font-semibold text-gray-900', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

/**
 * وصف البطاقة
 */
const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-gray-600 mt-1', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

/**
 * محتوى البطاقة
 */
const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-6', className)}
    {...props}
  />
))
CardContent.displayName = 'CardContent'

/**
 * تذييل البطاقة
 */
const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-6 border-t border-gray-200 bg-gray-50', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }

