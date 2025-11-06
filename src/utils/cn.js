import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * دالة لدمج فئات Tailwind CSS بشكل آمن
 * @param {...*} inputs - فئات CSS المراد دمجها
 * @returns {string} - فئات CSS المدموجة
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

