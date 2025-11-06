import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../components/layout/DashboardLayout'
import { LayoutDashboard, Scale, Calendar, FileText, Receipt, MessageSquare } from 'lucide-react'

// Pages
import ClientDashboard from '../pages/client/Dashboard'

const menuItems = [
  { label: 'لوحة التحكم', path: '/client/dashboard', icon: LayoutDashboard },
  { label: 'قضاياي', path: '/client/cases', icon: Scale },
  { label: 'مواعيدي', path: '/client/appointments', icon: Calendar },
  { label: 'مستنداتي', path: '/client/documents', icon: FileText },
  { label: 'فواتيري', path: '/client/invoices', icon: Receipt },
  { label: 'الاستشارات', path: '/client/consultations', icon: MessageSquare },
]

function ClientRoutes() {
  return (
    <DashboardLayout menuItems={menuItems}>
      <Routes>
        <Route path="dashboard" element={<ClientDashboard />} />
        <Route path="*" element={<Navigate to="/client/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  )
}

export default ClientRoutes

