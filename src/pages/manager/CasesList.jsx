import { Plus, Search } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table'
import { Badge } from '../../components/ui/badge'

function CasesList() {
  const cases = [
    { id: 1, number: '12345', title: 'قضية تجارية', client: 'شركة الأمل', lawyer: 'أحمد محمد', status: 'جارية' },
    { id: 2, number: '12346', title: 'قضية عمالية', client: 'محمد علي', lawyer: 'غير معين', status: 'جديدة' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة القضايا</h1>
          <p className="text-gray-600 mt-1">تعيين المحامين وإدارة القضايا</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          إضافة قضية
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>القضايا</CardTitle>
            <div className="relative w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input placeholder="بحث..." className="pr-10" />
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
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases.map((caseItem) => (
                <TableRow key={caseItem.id}>
                  <TableCell className="font-medium">{caseItem.number}</TableCell>
                  <TableCell>{caseItem.title}</TableCell>
                  <TableCell>{caseItem.client}</TableCell>
                  <TableCell>
                    {caseItem.lawyer === 'غير معين' ? (
                      <Badge variant="warning">{caseItem.lawyer}</Badge>
                    ) : (
                      caseItem.lawyer
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={caseItem.status === 'جارية' ? 'success' : 'info'}>
                      {caseItem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="ghost">
                      تعيين محامي
                    </Button>
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

