import { Plus, Search } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table'
import { Badge } from '../../components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'

function TeamList() {
  const team = [
    { id: 1, name: 'أحمد محمد', role: 'محامي', email: 'ahmed@lawfirm.com', phone: '+966 50 111 2222', cases: 12, status: 'نشط' },
    { id: 2, name: 'فاطمة أحمد', role: 'محامي', email: 'fatima@lawfirm.com', phone: '+966 55 333 4444', cases: 8, status: 'نشط' },
    { id: 3, name: 'خالد حسن', role: 'مدير', email: 'khaled@lawfirm.com', phone: '+966 50 555 6666', cases: 0, status: 'نشط' },
    { id: 4, name: 'سارة علي', role: 'موظف', email: 'sara@lawfirm.com', phone: '+966 55 777 8888', cases: 0, status: 'نشط' },
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  const getRoleBadgeColor = (role) => {
    const colors = {
      'محامي': 'primary',
      'مدير': 'success',
      'موظف': 'info',
    }
    return colors[role] || 'default'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة الفريق</h1>
          <p className="text-gray-600 mt-1">جميع أعضاء الفريق في المكتب</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          إضافة عضو جديد
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>قائمة الفريق</CardTitle>
            <div className="relative w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input placeholder="بحث عن عضو..." className="pr-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>العضو</TableHead>
                <TableHead>الدور</TableHead>
                <TableHead>البريد الإلكتروني</TableHead>
                <TableHead>الهاتف</TableHead>
                <TableHead>القضايا</TableHead>
                <TableHead>الحالة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {team.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getRoleBadgeColor(member.role)}>
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell>{member.cases}</TableCell>
                  <TableCell>
                    <Badge variant="success">{member.status}</Badge>
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

export default TeamList

