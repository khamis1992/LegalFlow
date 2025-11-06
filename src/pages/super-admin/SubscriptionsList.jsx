import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table'
import { Badge } from '../../components/ui/badge'

function SubscriptionsList() {
  const subscriptions = [
    { id: 1, firmName: 'مكتب المحاماة الدولي', plan: 'المتقدمة', amount: 999, status: 'نشط', nextBilling: '2025-12-15' },
    { id: 2, firmName: 'مكتب المستشار القانوني', plan: 'الأساسية', amount: 499, status: 'نشط', nextBilling: '2025-12-22' },
    { id: 3, firmName: 'مكتب العدالة', plan: 'المؤسسية', amount: 1999, status: 'تجريبي', nextBilling: '2025-12-01' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">إدارة الاشتراكات</h1>
        <p className="text-gray-600 mt-1">إدارة جميع الاشتراكات والمدفوعات</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة الاشتراكات</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>المكتب</TableHead>
                <TableHead>الخطة</TableHead>
                <TableHead>المبلغ الشهري</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الفوترة القادمة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptions.map((sub) => (
                <TableRow key={sub.id}>
                  <TableCell className="font-medium">{sub.firmName}</TableCell>
                  <TableCell>{sub.plan}</TableCell>
                  <TableCell>{sub.amount} ريال</TableCell>
                  <TableCell>
                    <Badge variant={sub.status === 'نشط' ? 'success' : 'warning'}>
                      {sub.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(sub.nextBilling).toLocaleDateString('ar-SA')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default SubscriptionsList

