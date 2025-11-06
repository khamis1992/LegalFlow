import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * مكون الجدول الرئيسي
 */
const Table = forwardRef(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
))
Table.displayName = 'Table'

/**
 * رأس الجدول
 */
const TableHeader = forwardRef(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('bg-gray-50 border-b border-gray-200', className)}
    {...props}
  />
))
TableHeader.displayName = 'TableHeader'

/**
 * جسم الجدول
 */
const TableBody = forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
))
TableBody.displayName = 'TableBody'

/**
 * تذييل الجدول
 */
const TableFooter = forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn('bg-gray-50 font-medium border-t border-gray-200', className)}
    {...props}
  />
))
TableFooter.displayName = 'TableFooter'

/**
 * صف الجدول
 */
const TableRow = forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b border-gray-200 transition-colors hover:bg-gray-50',
      className
    )}
    {...props}
  />
))
TableRow.displayName = 'TableRow'

/**
 * خلية رأس الجدول
 */
const TableHead = forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-right align-middle font-semibold text-gray-900',
      className
    )}
    {...props}
  />
))
TableHead.displayName = 'TableHead'

/**
 * خلية الجدول
 */
const TableCell = forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('p-4 align-middle text-gray-700', className)}
    {...props}
  />
))
TableCell.displayName = 'TableCell'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
}

