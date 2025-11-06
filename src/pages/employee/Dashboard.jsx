import { Briefcase, Calendar, FileText, Receipt } from 'lucide-react'
import StatsCard from '../../components/shared/StatsCard'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'

function EmployeeDashboard() {
  const stats = {
    clients: 35,
    appointments: 8,
    documents: 67,
    invoices: 12,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم الموظف</h1>
        <p className="text-gray-600 mt-1">إدارة العملاء والمواعيد</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="العملاء" value={stats.clients} icon={Briefcase} color="primary" />
        <StatsCard title="المواعيد" value={stats.appointments} icon={Calendar} color="warning" />
        <StatsCard title="المستندات" value={stats.documents} icon={FileText} color="info" />
        <StatsCard title="الفواتير" value={stats.invoices} icon={Receipt} color="success" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>المهام اليومية</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">لا توجد مهام معلقة</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default EmployeeDashboard

