import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../components/layout/DashboardLayout'
import { Building2, Users, CreditCard, Settings, BarChart3, FileText } from 'lucide-react'

// Pages
import SuperAdminDashboard from '../pages/super-admin/Dashboard'
import LawFirmsList from '../pages/super-admin/LawFirmsList'
import SubscriptionsList from '../pages/super-admin/SubscriptionsList'

const menuItems = [
  { label: 'لوحة التحكم', path: '/super-admin/dashboard', icon: BarChart3 },
  { label: 'المكاتب', path: '/super-admin/law-firms', icon: Building2 },
  { label: 'الاشتراكات', path: '/super-admin/subscriptions', icon: CreditCard },
  { label: 'المدفوعات', path: '/super-admin/payments', icon: FileText },
  { label: 'الإعدادات', path: '/super-admin/settings', icon: Settings },
]

function SuperAdminRoutes() {
  return (
    <DashboardLayout menuItems={menuItems}>
      <Routes>
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="law-firms" element={<LawFirmsList />} />
        <Route path="subscriptions" element={<SubscriptionsList />} />
        <Route path="*" element={<Navigate to="/super-admin/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  )
}

export default SuperAdminRoutes

