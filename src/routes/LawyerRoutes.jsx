import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../components/layout/DashboardLayout'
import { LayoutDashboard, Scale, Calendar, Briefcase, FileText, CheckSquare } from 'lucide-react'

// Pages
import LawyerDashboard from '../pages/lawyer/Dashboard'

const menuItems = [
  { label: 'لوحة التحكم', path: '/lawyer/dashboard', icon: LayoutDashboard },
  { label: 'قضاياي', path: '/lawyer/cases', icon: Scale },
  { label: 'المواعيد', path: '/lawyer/appointments', icon: Calendar },
  { label: 'عملائي', path: '/lawyer/clients', icon: Briefcase },
  { label: 'المستندات', path: '/lawyer/documents', icon: FileText },
  { label: 'مهامي', path: '/lawyer/tasks', icon: CheckSquare },
]

function LawyerRoutes() {
  return (
    <DashboardLayout menuItems={menuItems}>
      <Routes>
        <Route path="dashboard" element={<LawyerDashboard />} />
        <Route path="*" element={<Navigate to="/lawyer/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  )
}

export default LawyerRoutes

