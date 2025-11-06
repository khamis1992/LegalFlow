import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../../utils/validation'
import { UserPlus, Building2, User, Mail, Phone, Lock, AlertCircle, CheckCircle } from 'lucide-react'

function RegisterPage() {
  const navigate = useNavigate()
  const { register: registerUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      setError('')
      
      const result = await registerUser(data)
      
      if (result.success) {
        navigate('/owner/dashboard')
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
      <div className="w-full max-w-2xl">
        {/* الشعار */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary-600 mb-2">LawTec ERP</h1>
          <p className="text-gray-600">ابدأ تجربتك المجانية الآن</p>
        </div>

        {/* نموذج التسجيل */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <UserPlus className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">تسجيل مكتب جديد</h2>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* بيانات المكتب */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">بيانات المكتب</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* اسم المكتب */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اسم المكتب
                  </label>
                  <div className="relative">
                    <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      {...register('firmName')}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="مكتب المحاماة المتميز"
                    />
                  </div>
                  {errors.firmName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firmName.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* بيانات صاحب المكتب */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">بيانات صاحب المكتب</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* الاسم */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      {...register('ownerName')}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="أحمد محمد"
                    />
                  </div>
                  {errors.ownerName && (
                    <p className="mt-1 text-sm text-red-600">{errors.ownerName.message}</p>
                  )}
                </div>

                {/* رقم الهاتف */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+966 50 123 4567"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* البريد الإلكتروني */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="owner@lawfirm.com"
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

                {/* تأكيد كلمة المرور */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تأكيد كلمة المرور
                  </label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      {...register('confirmPassword')}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* زر التسجيل */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                'جاري التسجيل...'
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  إنشاء الحساب
                </>
              )}
            </button>
          </form>

          {/* تسجيل الدخول */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-700 font-semibold">
                سجّل الدخول
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

export default RegisterPage

