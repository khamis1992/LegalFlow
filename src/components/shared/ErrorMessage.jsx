import { AlertCircle } from 'lucide-react'

/**
 * مكون رسالة الخطأ
 * @param {string} message - نص رسالة الخطأ
 * @param {function} onRetry - دالة إعادة المحاولة
 */
function ErrorMessage({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-red-900 font-semibold mb-1">حدث خطأ</h3>
            <p className="text-red-700 text-sm">{message || 'حدث خطأ غير متوقع'}</p>
          </div>
        </div>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            إعادة المحاولة
          </button>
        )}
      </div>
    </div>
  )
}

export default ErrorMessage

