import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

/**
 * مكون لحماية المسارات حسب الدور
 * @param {string} requiredRole - الدور المطلوب للوصول
 * @param {ReactNode} children - المكونات الفرعية
 */
function ProtectedRoute({ requiredRole, children }) {
  const { user, loading, isAuthenticated } = useAuth()

  // انتظار التحقق من المصادقة
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    )
  }

  // إذا لم يكن مسجل دخول، إعادة توجيه لصفحة تسجيل الدخول
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // إذا كان الدور المطلوب محدد والمستخدم ليس لديه هذا الدور
  if (requiredRole && user.role !== requiredRole) {
    // إعادة توجيه للوحة الخاصة به
    const roleRoutes = {
      'super-admin': '/super-admin/dashboard',
      'owner': '/owner/dashboard',
      'manager': '/manager/dashboard',
      'lawyer': '/lawyer/dashboard',
      'employee': '/employee/dashboard',
      'client': '/client/dashboard',
    }
    
    return <Navigate to={roleRoutes[user.role] || '/'} replace />
  }

  return children
}

export default ProtectedRoute

