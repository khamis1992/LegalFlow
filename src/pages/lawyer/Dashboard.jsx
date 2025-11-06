import { Scale, Calendar, CheckSquare, FileText } from 'lucide-react'
import StatsCard from '../../components/shared/StatsCard'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'

function LawyerDashboard() {
  const stats = {
    myCases: 12,
    upcomingAppointments: 5,
    pendingTasks: 3,
    documents: 45,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم المحامي</h1>
        <p className="text-gray-600 mt-1">قضاياي ومواعيدي</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="قضاياي" value={stats.myCases} icon={Scale} color="primary" />
        <StatsCard title="المواعيد القادمة" value={stats.upcomingAppointments} icon={Calendar} color="warning" />
        <StatsCard title="المهام المعلقة" value={stats.pendingTasks} icon={CheckSquare} color="info" />
        <StatsCard title="المستندات" value={stats.documents} icon={FileText} color="success" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>مواعيد اليوم</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">لا توجد مواعيد لهذا اليوم</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default LawyerDashboard

