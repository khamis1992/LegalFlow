import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../components/layout/DashboardLayout'
import { LayoutDashboard, Users, Scale, Briefcase, DollarSign, Settings, BarChart3 } from 'lucide-react'

// Pages
import OwnerDashboard from '../pages/owner/Dashboard'
import TeamList from '../pages/owner/TeamList'
import CasesList from '../pages/owner/CasesList'
import ClientsList from '../pages/owner/ClientsList'

const menuItems = [
  { label: 'لوحة التحكم', path: '/owner/dashboard', icon: LayoutDashboard },
  { label: 'الفريق', path: '/owner/team', icon: Users },
  { label: 'القضايا', path: '/owner/cases', icon: Scale },
  { label: 'العملاء', path: '/owner/clients', icon: Briefcase },
  { label: 'المالية', path: '/owner/financial', icon: DollarSign },
  { label: 'التقارير', path: '/owner/reports', icon: BarChart3 },
  { label: 'الإعدادات', path: '/owner/settings', icon: Settings },
]

function OwnerRoutes() {
  return (
    <DashboardLayout menuItems={menuItems}>
      <Routes>
        <Route path="dashboard" element={<OwnerDashboard />} />
        <Route path="team" element={<TeamList />} />
        <Route path="cases" element={<CasesList />} />
        <Route path="clients" element={<ClientsList />} />
        <Route path="*" element={<Navigate to="/owner/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  )
}

export default OwnerRoutes

