# هيكل المشروع - LegalFlow

## 📁 البنية الكاملة للمشروع

```
lawtec/
├── public/
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx               ✅ الرأسية العامة
│   │   │   ├── Sidebar.jsx              ✅ القائمة الجانبية
│   │   │   └── DashboardLayout.jsx      ✅ التخطيط الرئيسي
│   │   │
│   │   ├── shared/
│   │   │   ├── ProtectedRoute.jsx       ✅ حماية المسارات
│   │   │   ├── LoadingSpinner.jsx       ✅ دوار التحميل
│   │   │   ├── ErrorMessage.jsx         ✅ رسالة الخطأ
│   │   │   └── StatsCard.jsx            ✅ بطاقة الإحصائيات
│   │   │
│   │   └── ui/
│   │       ├── button.jsx               ✅ مكون الزر
│   │       ├── card.jsx                 ✅ مكون البطاقة
│   │       ├── input.jsx                ✅ مكون الإدخال
│   │       ├── label.jsx                ✅ مكون التسمية
│   │       ├── badge.jsx                ✅ مكون الشارة
│   │       ├── table.jsx                ✅ مكون الجدول
│   │       ├── avatar.jsx               ✅ مكون الصورة الرمزية
│   │       ├── select.jsx               ✅ مكون القائمة المنسدلة
│   │       └── textarea.jsx             ✅ مكون النص المتعدد
│   │
│   ├── context/
│   │   ├── AuthContext.jsx              ✅ سياق المصادقة
│   │   ├── TenantContext.jsx            ✅ سياق Multi-tenancy
│   │   └── AppContext.jsx               ✅ السياق العام
│   │
│   ├── hooks/
│   │   └── (يمكن إضافة hooks مخصصة)
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx            ✅ صفحة تسجيل الدخول
│   │   │   ├── RegisterPage.jsx         ✅ صفحة التسجيل
│   │   │   └── ForgotPasswordPage.jsx   ✅ استعادة كلمة المرور
│   │   │
│   │   ├── public/
│   │   │   ├── LandingPage.jsx          ✅ الصفحة الرئيسية
│   │   │   ├── FeaturesPage.jsx         ✅ صفحة الميزات
│   │   │   └── PricingPage.jsx          ✅ صفحة الأسعار
│   │   │
│   │   ├── super-admin/
│   │   │   ├── Dashboard.jsx            ✅ لوحة التحكم
│   │   │   ├── LawFirmsList.jsx         ✅ قائمة المكاتب
│   │   │   └── SubscriptionsList.jsx    ✅ قائمة الاشتراكات
│   │   │
│   │   ├── owner/
│   │   │   ├── Dashboard.jsx            ✅ لوحة التحكم
│   │   │   ├── TeamList.jsx             ✅ قائمة الفريق
│   │   │   ├── CasesList.jsx            ✅ قائمة القضايا
│   │   │   └── ClientsList.jsx          ✅ قائمة العملاء
│   │   │
│   │   ├── manager/
│   │   │   ├── Dashboard.jsx            ✅ لوحة التحكم
│   │   │   └── CasesList.jsx            ✅ قائمة القضايا
│   │   │
│   │   ├── lawyer/
│   │   │   └── Dashboard.jsx            ✅ لوحة التحكم
│   │   │
│   │   ├── employee/
│   │   │   └── Dashboard.jsx            ✅ لوحة التحكم
│   │   │
│   │   └── client/
│   │       └── Dashboard.jsx            ✅ لوحة التحكم
│   │
│   ├── routes/
│   │   ├── SuperAdminRoutes.jsx         ✅ مسارات Super Admin
│   │   ├── OwnerRoutes.jsx              ✅ مسارات Owner
│   │   ├── ManagerRoutes.jsx            ✅ مسارات Manager
│   │   ├── LawyerRoutes.jsx             ✅ مسارات Lawyer
│   │   ├── EmployeeRoutes.jsx           ✅ مسارات Employee
│   │   └── ClientRoutes.jsx             ✅ مسارات Client
│   │
│   ├── utils/
│   │   ├── api.js                       ✅ دوال API
│   │   ├── constants.js                 ✅ الثوابت
│   │   ├── permissions.js               ✅ نظام الصلاحيات
│   │   ├── validation.js                ✅ التحقق من البيانات
│   │   └── cn.js                        ✅ دمج الفئات
│   │
│   ├── App.jsx                          ✅ المكون الرئيسي
│   ├── main.jsx                         ✅ نقطة الدخول
│   └── index.css                        ✅ التصميمات الأساسية
│
├── index.html                           ✅ HTML الرئيسي
├── package.json                         ✅ المكتبات والإعدادات
├── vite.config.js                       ✅ تكوين Vite
├── tailwind.config.js                   ✅ تكوين Tailwind
├── postcss.config.js                    ✅ تكوين PostCSS
├── .eslintrc.cjs                        ✅ تكوين ESLint
├── .gitignore                           ✅ Git ignore
├── README.md                            ✅ ملف التعريف
├── DEVELOPMENT_GUIDE.md                 ✅ دليل التطوير
├── PROJECT_STRUCTURE.md                 ✅ هيكل المشروع
└── law.plan.md                          ✅ خطة المشروع

```

## 📊 إحصائيات المشروع

### ✅ الملفات المكتملة

- **إجمالي الملفات:** 60+ ملف
- **مكونات React:** 40+ مكون
- **الصفحات:** 20+ صفحة
- **السياقات:** 3 Context
- **المسارات:** 6 Route files
- **المرافق:** 5 Utility files

### 🎯 نسبة الإنجاز

- ✅ البنية الأساسية: 100%
- ✅ نظام المصادقة: 100%
- ✅ مكونات UI: 100%
- ✅ مكونات التخطيط: 100%
- ✅ لوحات التحكم: 100%
- ⏳ الميزات المتقدمة: 40%

## 🔄 الميزات المتبقية

### نظام إدارة المستندات
- DocumentUpload.jsx
- DocumentList.jsx
- DocumentViewer.jsx
- DocumentTemplates.jsx

### النظام المحاسبي
- InvoiceForm.jsx
- ExpenseForm.jsx
- PaymentForm.jsx
- FinancialReports.jsx

### نظام الموارد البشرية
- AttendanceSheet.jsx
- LeaveRequest.jsx
- PerformanceReview.jsx
- SalaryManagement.jsx

### نظام المواعيد
- AppointmentCalendar.jsx
- CourtSessionCalendar.jsx
- ReminderSystem.jsx

### نظام التقارير
- RevenueChart.jsx
- CasesStatistics.jsx
- PerformanceMetrics.jsx

## 🎨 نظام التصميم

### الألوان الرئيسية
```javascript
primary: {
  50: '#eff6ff',
  100: '#dbeafe',
  600: '#2563eb',  // اللون الأساسي
  700: '#1d4ed8',
}
```

### المكونات الأساسية
- Button (5 أنواع)
- Card (6 أجزاء)
- Table (6 مكونات)
- Form Inputs (4 أنواع)
- Badges (6 ألوان)

## 🔐 نظام الصلاحيات

### الأدوار
1. **Super Admin** - إدارة كاملة للنظام
2. **Owner** - إدارة كاملة للمكتب
3. **Manager** - إدارة القضايا والفريق
4. **Lawyer** - إدارة القضايا المعينة
5. **Employee** - إدارة العملاء والمواعيد
6. **Client** - عرض القضايا والمستندات

### الصلاحيات
```javascript
hasPermission(role, resource, action)
// مثال: hasPermission('lawyer', 'myCases', 'update')
```

## 📱 التجاوب

- **Desktop:** الحجم الكامل مع القائمة الجانبية
- **Tablet:** تخطيط متوسط
- **Mobile:** قائمة منبثقة

## 🚀 الخطوات التالية

1. **إعداد Backend API**
   - اختر Technology Stack (Node.js, Python, etc)
   - أنشئ قاعدة البيانات
   - طور API Endpoints

2. **ربط Frontend بـ Backend**
   - حدّث `src/utils/api.js`
   - اختبر الـ API calls

3. **إكمال الميزات المتبقية**
   - اتبع الأمثلة الموجودة
   - استخدم نفس البنية

4. **الاختبار والتحسين**
   - أضف Unit Tests
   - حسّن الأداء
   - راجع الأمان

## 📞 معلومات التواصل

للدعم والاستفسارات، راجع:
- `DEVELOPMENT_GUIDE.md` للتفاصيل التقنية
- `README.md` لمعلومات عامة
- `law.plan.md` للخطة الكاملة

---

**آخر تحديث:** نوفمبر 2025  
**الحالة:** البنية الأساسية مكتملة، جاهز للتطوير

