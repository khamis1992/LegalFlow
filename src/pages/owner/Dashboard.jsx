import { Scale, Users, DollarSign, FileText } from 'lucide-react'
import StatsCard from '../../components/shared/StatsCard'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'

function OwnerDashboard() {
  // بيانات تجريبية
  const stats = {
    totalCases: 45,
    activeCases: 28,
    totalClients: 67,
    monthlyRevenue: '85,400',
  }

  const upcomingSessions = [
    { id: 1, caseTitle: 'قضية تجارية رقم 12345', court: 'المحكمة التجارية', date: '2025-11-08', time: '10:00' },
    { id: 2, caseTitle: 'قضية مدنية رقم 67890', court: 'المحكمة العامة', date: '2025-11-09', time: '11:30' },
  ]

  return (
    <div className="space-y-6">
      {/* العنوان */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم صاحب المكتب</h1>
        <p className="text-gray-600 mt-1">نظرة شاملة على أداء المكتب</p>
      </div>

      {/* الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="إجمالي القضايا"
          value={stats.totalCases}
          icon={Scale}
          trend="up"
          trendValue="+3"
          color="primary"
        />
        <StatsCard
          title="القضايا النشطة"
          value={stats.activeCases}
          icon={Scale}
          color="success"
        />
        <StatsCard
          title="العملاء"
          value={stats.totalClients}
          icon={Users}
          trend="up"
          trendValue="+5"
          color="info"
        />
        <StatsCard
          title="الإيرادات الشهرية"
          value={`${stats.monthlyRevenue} ريال`}
          icon={DollarSign}
          trend="up"
          trendValue="+8.2%"
          color="success"
        />
      </div>

      {/* الجلسات القادمة */}
      <Card>
        <CardHeader>
          <CardTitle>الجلسات القادمة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{session.caseTitle}</h4>
                  <p className="text-sm text-gray-600">{session.court}</p>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">{session.date}</p>
                  <p className="text-sm text-gray-600">{session.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* الأداء الشهري */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>القضايا حسب النوع</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">قضايا تجارية</span>
                <Badge variant="primary">18</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">قضايا مدنية</span>
                <Badge variant="success">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">قضايا عمالية</span>
                <Badge variant="info">8</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">قضايا أسرية</span>
                <Badge variant="warning">7</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>الفواتير المعلقة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">إجمالي الفواتير</span>
                <span className="font-semibold">15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">المدفوعة</span>
                <span className="text-green-600 font-semibold">10</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">المعلقة</span>
                <span className="text-yellow-600 font-semibold">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">المتأخرة</span>
                <span className="text-red-600 font-semibold">2</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default OwnerDashboard

