import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'

function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // محاكاة إرسال رابط استعادة كلمة المرور
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1500)
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">تم الإرسال بنجاح</h2>
            <p className="text-gray-600 mb-6">
              تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                يرجى التحقق من بريدك الإلكتروني واتباع التعليمات لإعادة تعيين كلمة المرور
              </p>
            </div>

            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <ArrowRight className="w-5 h-5" />
              العودة لتسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* الشعار */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary-600 mb-2">LegalFlow</h1>
          <p className="text-gray-600">استعادة كلمة المرور</p>
        </div>

        {/* نموذج استعادة كلمة المرور */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">نسيت كلمة المرور؟</h2>
          <p className="text-gray-600 mb-6">
            أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* البريد الإلكتروني */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="example@law.com"
                />
              </div>
            </div>

            {/* زر الإرسال */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              {loading ? 'جاري الإرسال...' : 'إرسال رابط الاستعادة'}
            </button>
          </form>

          {/* العودة لتسجيل الدخول */}
          <div className="mt-6 text-center">
            <Link 
              to="/login" 
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
            >
              <ArrowRight className="w-5 h-5" />
              العودة لتسجيل الدخول
            </Link>
          </div>
        </div>

        {/* العودة للصفحة الرئيسية */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage

