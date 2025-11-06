import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../components/layout/DashboardLayout'
import { LayoutDashboard, Briefcase, Calendar, FileText, CheckSquare, Receipt } from 'lucide-react'

// Pages
import EmployeeDashboard from '../pages/employee/Dashboard'

const menuItems = [
  { label: 'لوحة التحكم', path: '/employee/dashboard', icon: LayoutDashboard },
  { label: 'العملاء', path: '/employee/clients', icon: Briefcase },
  { label: 'المواعيد', path: '/employee/appointments', icon: Calendar },
  { label: 'المستندات', path: '/employee/documents', icon: FileText },
  { label: 'المهام', path: '/employee/tasks', icon: CheckSquare },
  { label: 'الفواتير', path: '/employee/invoices', icon: Receipt },
]

function EmployeeRoutes() {
  return (
    <DashboardLayout menuItems={menuItems}>
      <Routes>
        <Route path="dashboard" element={<EmployeeDashboard />} />
        <Route path="*" element={<Navigate to="/employee/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  )
}

export default EmployeeRoutes

