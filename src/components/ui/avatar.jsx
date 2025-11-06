import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * مكون الصورة الرمزية الرئيسي
 */
const Avatar = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
))
Avatar.displayName = 'Avatar'

/**
 * صورة الأفاتار
 */
const AvatarImage = forwardRef(({ className, src, alt, ...props }, ref) => (
  <img
    ref={ref}
    src={src}
    alt={alt}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
))
AvatarImage.displayName = 'AvatarImage'

/**
 * بديل الصورة (الأحرف الأولى)
 */
const AvatarFallback = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center bg-primary-100 text-primary-900 font-semibold',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = 'AvatarFallback'

export { Avatar, AvatarImage, AvatarFallback }

