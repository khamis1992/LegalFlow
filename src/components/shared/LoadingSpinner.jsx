/**
 * مكون دوار التحميل
 * @param {string} size - الحجم (sm, md, lg)
 * @param {string} text - نص التحميل
 */
function LoadingSpinner({ size = 'md', text = 'جاري التحميل...' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizes[size]} border-4 border-primary-600 border-t-transparent rounded-full animate-spin mb-4`}></div>
      {text && <p className="text-gray-600">{text}</p>}
    </div>
  )
}

export default LoadingSpinner

