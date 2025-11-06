import { Bell, User, LogOut, Settings, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'

/**
 * مكون الرأسية العامة
 * @param {function} onToggleSidebar - دالة لإظهار/إخفاء القائمة الجانبية
 */
function Header({ onToggleSidebar }) {
  const { user, logout } = useAuth()

  const getInitials = (name) => {
    return name
      ?.split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'U'
  }

  const getRoleName = (role) => {
    const roleNames = {
      'super-admin': 'مدير النظام',
      'owner': 'صاحب المكتب',
      'manager': 'مدير',
      'lawyer': 'محامي',
      'employee': 'موظف',
      'client': 'عميل',
    }
    return roleNames[role] || role
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4">
        {/* زر القائمة الجانبية (للموبايل) */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>

        {/* الشعار */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary-600">LawTec ERP</span>
        </div>

        {/* الإجراءات */}
        <div className="flex items-center gap-4">
          {/* الإشعارات */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* الملف الشخصي */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-600">{getRoleName(user?.role)}</p>
            </div>
            
            <div className="relative group">
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
              </Avatar>

              {/* القائمة المنسدلة */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-2">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700"
                  >
                    <User className="w-4 h-4" />
                    <span>الملف الشخصي</span>
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700"
                  >
                    <Settings className="w-4 h-4" />
                    <span>الإعدادات</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50 text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>تسجيل الخروج</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

