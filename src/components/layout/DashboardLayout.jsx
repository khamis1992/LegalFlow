import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

/**
 * مكون التخطيط الرئيسي للوحات التحكم
 * @param {Array} menuItems - عناصر القائمة الجانبية
 */
function DashboardLayout({ menuItems }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onToggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <Sidebar
          menuItems={menuItems}
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

