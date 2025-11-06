import { Plus, Search } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table'
import { Badge } from '../../components/ui/badge'

function CasesList() {
  const cases = [
    { id: 1, number: '12345', title: 'قضية تجارية', client: 'شركة الأمل', lawyer: 'أحمد محمد', status: 'جارية', priority: 'عالية' },
    { id: 2, number: '12346', title: 'قضية عمالية', client: 'محمد علي', lawyer: 'فاطمة أحمد', status: 'معلقة', priority: 'متوسطة' },
    { id: 3, number: '12347', title: 'قضية مدنية', client: 'سارة خالد', lawyer: 'خالد حسن', status: 'جديدة', priority: 'منخفضة' },
  ]

  const statusColors = {
    'جارية': 'success',
    'معلقة': 'warning',
    'جديدة': 'info',
    'مغلقة': 'default',
  }

  const priorityColors = {
    'عالية': 'danger',
    'متوسطة': 'warning',
    'منخفضة': 'success',
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة القضايا</h1>
          <p className="text-gray-600 mt-1">جميع القضايا في المكتب</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          إضافة قضية جديدة
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>قائمة القضايا</CardTitle>
            <div className="relative w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input placeholder="بحث عن قضية..." className="pr-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>رقم القضية</TableHead>
                <TableHead>العنوان</TableHead>
                <TableHead>العميل</TableHead>
                <TableHead>المحامي</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الأولوية</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases.map((caseItem) => (
                <TableRow key={caseItem.id}>
                  <TableCell className="font-medium">{caseItem.number}</TableCell>
                  <TableCell>{caseItem.title}</TableCell>
                  <TableCell>{caseItem.client}</TableCell>
                  <TableCell>{caseItem.lawyer}</TableCell>
                  <TableCell>
                    <Badge variant={statusColors[caseItem.status]}>
                      {caseItem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={priorityColors[caseItem.priority]}>
                      {caseItem.priority}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default CasesList

