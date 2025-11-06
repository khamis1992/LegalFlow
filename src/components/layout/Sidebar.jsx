import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * مكون القائمة الجانبية
 * @param {Array} menuItems - عناصر القائمة
 * @param {boolean} isOpen - حالة القائمة (مفتوحة/مغلقة)
 * @param {function} onClose - دالة إغلاق القائمة
 */
function Sidebar({ menuItems, isOpen, onClose }) {
  return (
    <>
      {/* Overlay للموبايل */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* القائمة الجانبية */}
      <aside
        className={cn(
          'fixed top-0 right-0 h-full bg-white border-l border-gray-200 z-50 transition-transform duration-300 w-64',
          'lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0',
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        )}
      >
        {/* رأس القائمة (للموبايل) */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <span className="text-lg font-bold text-primary-600">القائمة</span>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* عناصر القائمة */}
        <nav className="p-4 overflow-y-auto h-[calc(100%-4rem)] lg:h-full">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              
              return (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    onClick={() => onClose && onClose()}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                        isActive
                          ? 'bg-primary-50 text-primary-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      )
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="mr-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

