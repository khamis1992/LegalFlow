import { Plus, Search, Edit, Trash2 } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table'
import { Badge } from '../../components/ui/badge'

function LawFirmsList() {
  const firms = [
    { id: 1, name: 'مكتب المحاماة الدولي', plan: 'المتقدمة', status: 'نشط', users: 25, joinDate: '2025-01-15' },
    { id: 2, name: 'مكتب المستشار القانوني', plan: 'الأساسية', status: 'نشط', users: 8, joinDate: '2025-03-22' },
    { id: 3, name: 'مكتب العدالة', plan: 'المؤسسية', status: 'تجريبي', users: 45, joinDate: '2025-11-01' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة المكاتب</h1>
          <p className="text-gray-600 mt-1">إدارة جميع مكاتب المحاماة المشتركة</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          إضافة مكتب جديد
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>قائمة المكاتب</CardTitle>
            <div className="relative w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input placeholder="بحث عن مكتب..." className="pr-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>اسم المكتب</TableHead>
                <TableHead>الخطة</TableHead>
                <TableHead>عدد المستخدمين</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>تاريخ الانضمام</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {firms.map((firm) => (
                <TableRow key={firm.id}>
                  <TableCell className="font-medium">{firm.name}</TableCell>
                  <TableCell>{firm.plan}</TableCell>
                  <TableCell>{firm.users}</TableCell>
                  <TableCell>
                    <Badge variant={firm.status === 'نشط' ? 'success' : 'warning'}>
                      {firm.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(firm.joinDate).toLocaleDateString('ar-SA')}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
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

export default LawFirmsList

