import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../../utils/validation'
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react'

function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      setError('')
      
      const result = await login(data)
      
      if (result.success) {
        // إعادة توجيه حسب دور المستخدم
        const roleRoutes = {
          'super-admin': '/super-admin/dashboard',
          'owner': '/owner/dashboard',
          'manager': '/manager/dashboard',
          'lawyer': '/lawyer/dashboard',
          'employee': '/employee/dashboard',
          'client': '/client/dashboard',
        }
        
        navigate(roleRoutes[result.user.role] || '/')
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError('حدث خطأ غير متوقع')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* الشعار */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary-600 mb-2">LawTec ERP</h1>
          <p className="text-gray-600">نظام إدارة مكاتب المحاماة</p>
        </div>

        {/* نموذج تسجيل الدخول */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <LogIn className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">تسجيل الدخول</h2>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* البريد الإلكتروني */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  {...register('email')}
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="example@law.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* كلمة المرور */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  {...register('password')}
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            {/* نسيت كلمة المرور */}
            <div className="flex justify-between items-center">
              <Link 
                to="/forgot-password" 
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            {/* زر تسجيل الدخول */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </form>

          {/* تسجيل حساب جديد */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-primary-600 hover:text-primary-700 font-semibold">
                سجّل الآن
              </Link>
            </p>
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

export default LoginPage

