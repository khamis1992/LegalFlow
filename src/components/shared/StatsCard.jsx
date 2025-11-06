import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

/**
 * مكون بطاقة الإحصائيات
 */
function StatsCard({ title, value, icon: Icon, trend, trendValue, color = 'primary' }) {
  const colors = {
    primary: 'bg-primary-100 text-primary-600',
    success: 'bg-green-100 text-green-600',
    warning: 'bg-yellow-100 text-yellow-600',
    danger: 'bg-red-100 text-red-600',
    info: 'bg-blue-100 text-blue-600',
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-gray-600 text-sm mb-2">{title}</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
            
            {trend && (
              <div className="flex items-center gap-1">
                {trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600" />
                )}
                <span className={`text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {trendValue}
                </span>
                <span className="text-gray-600 text-sm">من الشهر الماضي</span>
              </div>
            )}
          </div>

          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colors[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default StatsCard

