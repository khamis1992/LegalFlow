import { Scale, Users, CheckSquare, FileText } from 'lucide-react'
import StatsCard from '../../components/shared/StatsCard'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'

function ManagerDashboard() {
  const stats = {
    totalCases: 35,
    teamMembers: 12,
    pendingTasks: 8,
    documents: 156,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم المدير</h1>
        <p className="text-gray-600 mt-1">إدارة الفريق والقضايا</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="القضايا المدارة" value={stats.totalCases} icon={Scale} color="primary" />
        <StatsCard title="أعضاء الفريق" value={stats.teamMembers} icon={Users} color="success" />
        <StatsCard title="المهام المعلقة" value={stats.pendingTasks} icon={CheckSquare} color="warning" />
        <StatsCard title="المستندات" value={stats.documents} icon={FileText} color="info" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>نشاط الفريق اليوم</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">لا توجد أنشطة جديدة</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default ManagerDashboard

