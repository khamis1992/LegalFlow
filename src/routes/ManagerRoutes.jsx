import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../components/layout/DashboardLayout'
import { LayoutDashboard, Scale, Users, Briefcase, FileText, CheckSquare, BarChart3 } from 'lucide-react'

// Pages
import ManagerDashboard from '../pages/manager/Dashboard'
import CasesList from '../pages/manager/CasesList'

const menuItems = [
  { label: 'لوحة التحكم', path: '/manager/dashboard', icon: LayoutDashboard },
  { label: 'القضايا', path: '/manager/cases', icon: Scale },
  { label: 'الفريق', path: '/manager/team', icon: Users },
  { label: 'العملاء', path: '/manager/clients', icon: Briefcase },
  { label: 'المستندات', path: '/manager/documents', icon: FileText },
  { label: 'المهام', path: '/manager/tasks', icon: CheckSquare },
  { label: 'التقارير', path: '/manager/reports', icon: BarChart3 },
]

function ManagerRoutes() {
  return (
    <DashboardLayout menuItems={menuItems}>
      <Routes>
        <Route path="dashboard" element={<ManagerDashboard />} />
        <Route path="cases" element={<CasesList />} />
        <Route path="*" element={<Navigate to="/manager/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  )
}

export default ManagerRoutes

