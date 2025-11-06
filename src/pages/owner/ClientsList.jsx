import { Plus, Search } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table'
import { Badge } from '../../components/ui/badge'

function ClientsList() {
  const clients = [
    { id: 1, name: 'شركة الأمل', type: 'شركة', phone: '+966 50 123 4567', email: 'info@alamal.com', cases: 5, status: 'نشط' },
    { id: 2, name: 'محمد علي', type: 'فرد', phone: '+966 55 987 6543', email: 'mohamed@email.com', cases: 2, status: 'نشط' },
    { id: 3, name: 'سارة خالد', type: 'فرد', phone: '+966 50 456 7890', email: 'sara@email.com', cases: 1, status: 'جديد' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة العملاء</h1>
          <p className="text-gray-600 mt-1">جميع عملاء المكتب</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          إضافة عميل جديد
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>قائمة العملاء</CardTitle>
            <div className="relative w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input placeholder="بحث عن عميل..." className="pr-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الاسم</TableHead>
                <TableHead>النوع</TableHead>
                <TableHead>الهاتف</TableHead>
                <TableHead>البريد الإلكتروني</TableHead>
                <TableHead>عدد القضايا</TableHead>
                <TableHead>الحالة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.type}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.cases}</TableCell>
                  <TableCell>
                    <Badge variant={client.status === 'نشط' ? 'success' : 'info'}>
                      {client.status}
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

export default ClientsList

