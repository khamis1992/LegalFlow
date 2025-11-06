import { createContext, useContext, useState, useEffect } from 'react'
import { authAPI } from '../utils/api'
import { USER_ROLES } from '../utils/constants'

const AuthContext = createContext(null)

/**
 * مزود سياق المصادقة
 * يدير حالة تسجيل الدخول والمستخدم الحالي
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // التحقق من المستخدم المسجل عند التحميل
  useEffect(() => {
    checkAuth()
  }, [])

  /**
   * التحقق من حالة المصادقة
   */
  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        setLoading(false)
        return
      }

      const userData = await authAPI.getCurrentUser()
      setUser(userData)
    } catch (err) {
      console.error('Auth check failed:', err)
      localStorage.removeItem('token')
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  /**
   * تسجيل الدخول
   * @param {object} credentials - بيانات الاعتماد (email, password)
   */
  const login = async (credentials) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await authAPI.login(credentials)
      
      if (response.token) {
        localStorage.setItem('token', response.token)
        setUser(response.user)
        return { success: true, user: response.user }
      }
      
      throw new Error('فشل تسجيل الدخول')
    } catch (err) {
      const errorMessage = err.message || 'حدث خطأ في تسجيل الدخول'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  /**
   * تسجيل مكتب جديد
   * @param {object} data - بيانات التسجيل
   */
  const register = async (data) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await authAPI.register(data)
      
      if (response.token) {
        localStorage.setItem('token', response.token)
        setUser(response.user)
        return { success: true, user: response.user }
      }
      
      throw new Error('فشل التسجيل')
    } catch (err) {
      const errorMessage = err.message || 'حدث خطأ في التسجيل'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  /**
   * تسجيل الخروج
   */
  const logout = async () => {
    try {
      await authAPI.logout()
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      localStorage.removeItem('token')
      setUser(null)
    }
  }

  /**
   * التحقق من دور المستخدم
   * @param {string} role - الدور المطلوب
   * @returns {boolean}
   */
  const hasRole = (role) => {
    return user?.role === role
  }

  /**
   * التحقق من أن المستخدم لديه أحد الأدوار
   * @param {string[]} roles - قائمة الأدوار
   * @returns {boolean}
   */
  const hasAnyRole = (roles) => {
    return roles.includes(user?.role)
  }

  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    hasRole,
    hasAnyRole,
    setError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/**
 * Hook للوصول لسياق المصادقة
 */
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export default AuthContext

