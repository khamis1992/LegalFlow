import { Building2, CreditCard, DollarSign, TrendingUp } from 'lucide-react'
import StatsCard from '../../components/shared/StatsCard'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table'
import { Badge } from '../../components/ui/badge'

function SuperAdminDashboard() {
  // بيانات تجريبية
  const stats = {
    totalFirms: 124,
    activeSubscriptions: 98,
    monthlyRevenue: '245,800',
    growth: '+12.5%',
  }

  const recentFirms = [
    { id: 1, name: 'مكتب المحاماة الدولي', plan: 'المتقدمة', status: 'نشط', joinDate: '2025-11-01' },
    { id: 2, name: 'مكتب المستشار القانوني', plan: 'الأساسية', status: 'نشط', joinDate: '2025-11-03' },
    { id: 3, name: 'مكتب العدالة', plan: 'المؤسسية', status: 'تجريبي', joinDate: '2025-11-05' },
  ]

  return (
    <div className="space-y-6">
      {/* العنوان */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم مدير النظام</h1>
        <p className="text-gray-600 mt-1">نظرة شاملة على جميع المكاتب والاشتراكات</p>
      </div>

      {/* الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="إجمالي المكاتب"
          value={stats.totalFirms}
          icon={Building2}
          trend="up"
          trendValue="+8"
          color="primary"
        />
        <StatsCard
          title="الاشتراكات النشطة"
          value={stats.activeSubscriptions}
          icon={CreditCard}
          trend="up"
          trendValue="+5"
          color="success"
        />
        <StatsCard
          title="الإيرادات الشهرية"
          value={`${stats.monthlyRevenue} ريال`}
          icon={DollarSign}
          trend="up"
          trendValue={stats.growth}
          color="info"
        />
        <StatsCard
          title="معدل النمو"
          value={stats.growth}
          icon={TrendingUp}
          color="success"
        />
      </div>

      {/* المكاتب الحديثة */}
      <Card>
        <CardHeader>
          <CardTitle>المكاتب المسجلة حديثاً</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>اسم المكتب</TableHead>
                <TableHead>الخطة</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>تاريخ الانضمام</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentFirms.map((firm) => (
                <TableRow key={firm.id}>
                  <TableCell className="font-medium">{firm.name}</TableCell>
                  <TableCell>{firm.plan}</TableCell>
                  <TableCell>
                    <Badge variant={firm.status === 'نشط' ? 'success' : 'warning'}>
                      {firm.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(firm.joinDate).toLocaleDateString('ar-SA')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default SuperAdminDashboard

