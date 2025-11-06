import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'

const TenantContext = createContext(null)

/**
 * مزود سياق Multi-tenancy
 * يدير عزل البيانات بين المكاتب المختلفة
 */
export function TenantProvider({ children }) {
  const { user } = useAuth()
  const [currentFirm, setCurrentFirm] = useState(null)
  const [loading, setLoading] = useState(true)

  // تحديث المكتب الحالي عند تغيير المستخدم
  useEffect(() => {
    if (user) {
      // Super Admin ليس له مكتب محدد
      if (user.role === 'super-admin') {
        setCurrentFirm(null)
      } else {
        // باقي المستخدمين لهم مكتب
        setCurrentFirm({
          id: user.firmId,
          name: user.firmName,
        })
      }
    } else {
      setCurrentFirm(null)
    }
    setLoading(false)
  }, [user])

  /**
   * التحقق من أن المستخدم ينتمي لمكتب معين
   * @param {string} firmId - معرف المكتب
   * @returns {boolean}
   */
  const belongsToFirm = (firmId) => {
    if (!currentFirm) return false
    return currentFirm.id === firmId
  }

  /**
   * الحصول على معرف المكتب الحالي
   * @returns {string|null}
   */
  const getCurrentFirmId = () => {
    return currentFirm?.id || null
  }

  /**
   * تصفية البيانات حسب المكتب الحالي
   * @param {Array} data - البيانات المراد تصفيتها
   * @returns {Array}
   */
  const filterByCurrentFirm = (data) => {
    if (!currentFirm) return data
    return data.filter(item => item.firmId === currentFirm.id)
  }

  const value = {
    currentFirm,
    loading,
    belongsToFirm,
    getCurrentFirmId,
    filterByCurrentFirm,
  }

  return <TenantContext.Provider value={value}>{children}</TenantContext.Provider>
}

/**
 * Hook للوصول لسياق Multi-tenancy
 */
export function useTenant() {
  const context = useContext(TenantContext)
  if (!context) {
    throw new Error('useTenant must be used within TenantProvider')
  }
  return context
}

export default TenantContext

