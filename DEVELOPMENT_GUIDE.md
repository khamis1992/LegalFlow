# دليل التطوير - LegalFlow

## نظرة عامة

تم إنشاء البنية الأساسية الكاملة لنظام LegalFlow لإدارة مكاتب المحاماة. هذا الدليل يشرح كيفية إكمال تطوير الميزات المتبقية.

## 📁 البنية المكتملة

### ✅ ما تم إنجازه

1. **البنية الأساسية**
   - ✅ إعداد المشروع مع Vite + React 19
   - ✅ تكوين Tailwind CSS و ESLint
   - ✅ بنية المجلدات الكاملة

2. **نظام المصادقة**
   - ✅ AuthContext مع 6 أنواع من المستخدمين
   - ✅ TenantContext لعزل بيانات المكاتب
   - ✅ ProtectedRoute للحماية
   - ✅ صفحات Login, Register, ForgotPassword

3. **مكونات واجهة المستخدم**
   - ✅ Button, Card, Input, Label
   - ✅ Badge, Avatar, Table, Select, Textarea
   - ✅ LoadingSpinner, ErrorMessage
   - ✅ StatsCard

4. **مكونات التخطيط**
   - ✅ Header, Sidebar, DashboardLayout
   - ✅ متجاوب بالكامل مع الموبايل

5. **لوحات التحكم (6 أنواع)**
   - ✅ Super Admin Dashboard
   - ✅ Owner Dashboard
   - ✅ Manager Dashboard
   - ✅ Lawyer Dashboard
   - ✅ Employee Dashboard
   - ✅ Client Dashboard

6. **صفحات الأمثلة**
   - ✅ إدارة المكاتب (Super Admin)
   - ✅ إدارة الاشتراكات (Super Admin)
   - ✅ إدارة القضايا (Owner, Manager)
   - ✅ إدارة العملاء (Owner)
   - ✅ إدارة الفريق (Owner)

7. **الصفحات العامة**
   - ✅ Landing Page
   - ✅ Features Page
   - ✅ Pricing Page

8. **المرافق**
   - ✅ API utilities (api.js)
   - ✅ Permission system (permissions.js)
   - ✅ Validation schemas (validation.js)
   - ✅ Constants (constants.js)

## 🔧 الميزات المتبقية للتطوير

### 1. نظام إدارة المستندات

**الملفات المطلوبة:**
```
src/
├── components/
│   └── shared/
│       ├── DocumentUpload.jsx
│       ├── DocumentList.jsx
│       ├── DocumentViewer.jsx
│       └── DocumentTemplates.jsx
├── pages/
│   └── [role]/
│       └── DocumentsPage.jsx
```

**المثال:**
```javascript
// src/components/shared/DocumentUpload.jsx
import { Upload } from 'lucide-react'
import { documentsAPI } from '../../utils/api'

function DocumentUpload({ onUploadComplete }) {
  const handleFileUpload = async (files) => {
    const formData = new FormData()
    formData.append('file', files[0])
    
    try {
      await documentsAPI.upload(formData)
      onUploadComplete()
    } catch (error) {
      console.error('Upload failed:', error)
    }
  }

  return (
    <div className="border-2 border-dashed rounded-lg p-8">
      <input type="file" onChange={(e) => handleFileUpload(e.target.files)} />
    </div>
  )
}
```

### 2. النظام المحاسبي

**الملفات المطلوبة:**
```
src/
├── components/
│   └── shared/
│       ├── InvoiceForm.jsx
│       ├── InvoiceList.jsx
│       ├── ExpenseForm.jsx
│       └── PaymentForm.jsx
├── pages/
│   └── owner/
│       ├── FinancialOverview.jsx
│       ├── InvoicesPage.jsx
│       ├── ExpensesPage.jsx
│       └── SalariesPage.jsx
```

**المثال:**
```javascript
// src/components/shared/InvoiceForm.jsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { invoiceSchema } from '../../utils/validation'

function InvoiceForm({ onSubmit }) {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(invoiceSchema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Invoice form fields */}
    </form>
  )
}
```

### 3. نظام الموارد البشرية

**الملفات المطلوبة:**
```
src/
├── components/
│   └── shared/
│       ├── AttendanceSheet.jsx
│       ├── LeaveRequest.jsx
│       └── PerformanceReview.jsx
├── pages/
│   └── owner/
│       ├── HROverview.jsx
│       ├── AttendancePage.jsx
│       └── PerformancePage.jsx
```

### 4. نظام المواعيد والتقويم

**الملفات المطلوبة:**
```
src/
├── components/
│   └── shared/
│       ├── AppointmentCalendar.jsx
│       ├── AppointmentForm.jsx
│       └── CourtSessionCalendar.jsx
├── pages/
│   └── [role]/
│       └── AppointmentsPage.jsx
```

**المثال:**
```javascript
// src/components/shared/AppointmentCalendar.jsx
import { useState } from 'react'
import { Calendar } from 'lucide-react'

function AppointmentCalendar({ appointments }) {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="p-4 bg-white rounded-lg">
      {/* Calendar implementation */}
    </div>
  )
}
```

### 5. نظام التقارير والتحليلات

**الملفات المطلوبة:**
```
src/
├── components/
│   └── shared/
│       ├── RevenueChart.jsx
│       ├── CasesStatistics.jsx
│       └── PerformanceMetrics.jsx
├── pages/
│   └── owner/
│       └── ReportsPage.jsx
```

**استخدام Recharts:**
```javascript
// src/components/shared/RevenueChart.jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function RevenueChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
```

## 🎯 خطوات التطوير الموصى بها

### الخطوة 1: إعداد Backend API

قبل متابعة تطوير الميزات، يجب إنشاء Backend API:

```bash
# مثال باستخدام Node.js + Express
npm init -y
npm install express mongoose cors dotenv jsonwebtoken bcryptjs
```

**مثال على API endpoint:**
```javascript
// server.js
const express = require('express')
const app = express()

app.post('/api/cases', async (req, res) => {
  try {
    const newCase = await Case.create(req.body)
    res.json(newCase)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
```

### الخطوة 2: ربط Frontend بـ Backend

تحديث `src/utils/api.js` لربطه بالـ Backend:

```javascript
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api'
```

### الخطوة 3: إضافة State Management (اختياري)

إذا أصبح التطبيق معقداً، يمكن إضافة Zustand أو Redux:

```bash
npm install zustand
```

```javascript
// src/store/useCasesStore.js
import create from 'zustand'

export const useCasesStore = create((set) => ({
  cases: [],
  addCase: (newCase) => set((state) => ({ cases: [...state.cases, newCase] })),
  updateCase: (id, data) => set((state) => ({
    cases: state.cases.map(c => c.id === id ? { ...c, ...data } : c)
  })),
}))
```

### الخطوة 4: إضافة Real-time Features (اختياري)

استخدام Socket.io للإشعارات الفورية:

```bash
npm install socket.io-client
```

```javascript
// src/utils/socket.js
import io from 'socket.io-client'

export const socket = io(process.env.VITE_API_URL)

socket.on('new-case', (data) => {
  console.log('New case created:', data)
})
```

### الخطوة 5: تحسين الأداء

1. **Code Splitting:**
```javascript
// src/App.jsx
const OwnerRoutes = lazy(() => import('./routes/OwnerRoutes'))
```

2. **Memoization:**
```javascript
const MemoizedList = React.memo(CasesList)
```

3. **Virtual Scrolling للقوائم الطويلة:**
```bash
npm install react-window
```

## 📚 المكتبات المُوصى بإضافتها

### للتقويم والتواريخ
```bash
npm install @fullcalendar/react @fullcalendar/daygrid
```

### لعرض المستندات
```bash
npm install react-pdf @react-pdf/renderer
```

### للإشعارات
```bash
npm install react-hot-toast
```

### للجداول المتقدمة
```bash
npm install @tanstack/react-table
```

## 🚀 أوامر التشغيل

```bash
# تثبيت المكتبات
npm install

# تشغيل بيئة التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة البناء
npm run preview

# فحص الأكواد
npm run lint
```

## 🔐 متغيرات البيئة

إنشاء ملف `.env`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=LawTec ERP
VITE_UPLOAD_MAX_SIZE=10485760
```

## 📝 معلومات إضافية

### بنية قاعدة البيانات المقترحة

```javascript
// Models Schema Example
User: {
  _id, email, password, name, phone, role,
  firmId, avatar, isActive, createdAt
}

LawFirm: {
  _id, name, registrationNumber, email,
  subscriptionId, ownerId, settings, createdAt
}

Case: {
  _id, caseNumber, title, description, type,
  status, priority, clientId, lawyerId, firmId,
  sessions, documents, notes, createdAt
}
```

### نظام الصلاحيات

الصلاحيات موجودة في `src/utils/permissions.js`:

```javascript
import { hasPermission } from '@/utils/permissions'

if (hasPermission(user.role, 'cases', 'create')) {
  // السماح بإنشاء قضية
}
```

### الاختبارات

لإضافة الاختبارات:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

```javascript
// src/components/__tests__/Button.test.jsx
import { render, screen } from '@testing-library/react'
import { Button } from '../ui/button'

test('renders button', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

## 🎨 إرشادات التصميم

- اتبع نظام الألوان المحدد في `tailwind.config.js`
- استخدم مكونات UI الموجودة في `src/components/ui/`
- حافظ على التصميم المتجاوب (Mobile-first)
- استخدم أيقونات Lucide React فقط

## 📞 الدعم والمساعدة

لأي استفسارات أو مساعدة في التطوير:
- راجع الكود الموجود كمرجع
- استخدم نفس الأنماط والبنية
- اتبع قواعد التسمية المحددة

---

**ملاحظة:** هذا الدليل يوفر البنية الأساسية الكاملة لـ LegalFlow. يمكنك البدء في تطوير أي ميزة باتباع الأمثلة الموجودة في الكود.

**تم إنشاؤه:** نوفمبر 2025  
**الإصدار:** 1.0.0

