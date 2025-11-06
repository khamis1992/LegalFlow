import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { useTenant } from './TenantContext'

const AppContext = createContext(null)

/**
 * مزود السياق العام للتطبيق
 * يدير الحالة العامة والبيانات المشتركة
 */
export function AppProvider({ children }) {
  const { user } = useAuth()
  const { currentFirm } = useTenant()
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [stats, setStats] = useState(null)
  const [notifications, setNotifications] = useState([])

  /**
   * تحديث الإحصائيات
   */
  const updateStats = async () => {
    try {
      setLoading(true)
      // هنا سيتم جلب الإحصائيات من API
      // const data = await fetchStats(currentFirm?.id)
      // setStats(data)
      
      // بيانات تجريبية مؤقتة
      setStats({
        totalCases: 0,
        activeCases: 0,
        totalClients: 0,
        pendingInvoices: 0,
      })
    } catch (err) {
      console.error('Failed to update stats:', err)
      setError('فشل تحديث الإحصائيات')
    } finally {
      setLoading(false)
    }
  }

  /**
   * إضافة إشعار جديد
   * @param {object} notification - الإشعار
   */
  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      read: false,
      ...notification,
    }
    setNotifications(prev => [newNotification, ...prev])
  }

  /**
   * وضع علامة مقروء على إشعار
   * @param {number} id - معرف الإشعار
   */
  const markNotificationAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    )
  }

  /**
   * مسح جميع الإشعارات
   */
  const clearNotifications = () => {
    setNotifications([])
  }

  /**
   * مسح الخطأ
   */
  const clearError = () => {
    setError(null)
  }

  // تحديث الإحصائيات عند تسجيل الدخول أو تغيير المكتب
  useEffect(() => {
    if (user && currentFirm) {
      updateStats()
    }
  }, [user, currentFirm])

  const value = {
    loading,
    error,
    stats,
    notifications,
    updateStats,
    addNotification,
    markNotificationAsRead,
    clearNotifications,
    setError,
    clearError,
    setLoading,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

/**
 * Hook للوصول للسياق العام
 */
export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export default AppContext

