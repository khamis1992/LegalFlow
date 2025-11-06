import { Scale, Calendar, FileText, Receipt } from 'lucide-react'
import StatsCard from '../../components/shared/StatsCard'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'

function ClientDashboard() {
  const stats = {
    myCases: 3,
    appointments: 2,
    documents: 15,
    invoices: 4,
  }

  const recentCases = [
    { id: 1, title: 'قضية تجارية', status: 'جارية', lastUpdate: '2025-11-05' },
    { id: 2, title: 'قضية عمالية', status: 'معلقة', lastUpdate: '2025-11-03' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
        <p className="text-gray-600 mt-1">نظرة عامة على قضاياك ومواعيدك</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="قضاياي" value={stats.myCases} icon={Scale} color="primary" />
        <StatsCard title="مواعيدي" value={stats.appointments} icon={Calendar} color="warning" />
        <StatsCard title="مستنداتي" value={stats.documents} icon={FileText} color="info" />
        <StatsCard title="فواتيري" value={stats.invoices} icon={Receipt} color="success" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قضاياي الحالية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentCases.map((caseItem) => (
              <div key={caseItem.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">{caseItem.title}</h4>
                  <p className="text-sm text-gray-600">آخر تحديث: {new Date(caseItem.lastUpdate).toLocaleDateString('ar-SA')}</p>
                </div>
                <Badge variant={caseItem.status === 'جارية' ? 'success' : 'warning'}>
                  {caseItem.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ClientDashboard

