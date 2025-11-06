import { Link } from 'react-router-dom'
import { 
  Building2, Scale, Users, FileText, DollarSign, Calendar, 
  BarChart3, Shield, Clock, UserCheck, Briefcase, TrendingUp,
  CheckCircle, ArrowLeft 
} from 'lucide-react'

function FeaturesPage() {
  const features = [
    {
      category: 'إدارة القضايا',
      icon: Scale,
      description: 'نظام متكامل لإدارة القضايا من البداية حتى النهاية',
      items: [
        'تسجيل وتتبع القضايا',
        'إدارة جلسات المحكمة',
        'الجدول الزمني للقضية',
        'تعيين المحامين للقضايا',
        'إدارة حالات وأنواع القضايا',
        'ملاحظات وتعليقات متقدمة'
      ]
    },
    {
      category: 'إدارة العملاء',
      icon: Users,
      description: 'ملفات عملاء شاملة مع تاريخ كامل',
      items: [
        'ملفات العملاء المتكاملة',
        'تاريخ القضايا لكل عميل',
        'المستندات والعقود',
        'سجل الاستشارات',
        'تتبع التواصل',
        'بوابة خاصة للعملاء'
      ]
    },
    {
      category: 'إدارة المستندات',
      icon: FileText,
      description: 'أرشفة ذكية وآمنة للمستندات',
      items: [
        'رفع وتخزين المستندات',
        'تصنيف وأرشفة ذكية',
        'قوالب المستندات الجاهزة',
        'عارض مستندات متقدم',
        'البحث المتقدم',
        'مستويات سرية متعددة'
      ]
    },
    {
      category: 'النظام المحاسبي',
      icon: DollarSign,
      description: 'نظام محاسبي متكامل ومتطور',
      items: [
        'إصدار الفواتير',
        'تتبع المدفوعات',
        'إدارة المصروفات',
        'حساب الأتعاب',
        'تقارير مالية شاملة',
        'الضرائب والزكاة'
      ]
    },
    {
      category: 'الموارد البشرية',
      icon: UserCheck,
      description: 'إدارة كاملة للفريق والموظفين',
      items: [
        'ملفات الموظفين',
        'نظام الحضور والانصراف',
        'إدارة الإجازات',
        'حساب الرواتب',
        'تقييم الأداء',
        'الأدوار والصلاحيات'
      ]
    },
    {
      category: 'المواعيد والتقويم',
      icon: Calendar,
      description: 'تقويم ذكي مع تذكيرات تلقائية',
      items: [
        'تقويم تفاعلي',
        'جدولة المواعيد',
        'تذكيرات تلقائية',
        'جلسات المحكمة',
        'الاستشارات القانونية',
        'مزامنة التقويم'
      ]
    },
    {
      category: 'التقارير والتحليلات',
      icon: BarChart3,
      description: 'تقارير شاملة ورسوم بيانية تفاعلية',
      items: [
        'تقارير القضايا',
        'التقارير المالية',
        'تقارير الأداء',
        'إحصائيات شاملة',
        'رسوم بيانية تفاعلية',
        'تقارير مخصصة'
      ]
    },
    {
      category: 'الأمان والصلاحيات',
      icon: Shield,
      description: 'حماية متقدمة وصلاحيات متعددة المستويات',
      items: [
        '6 أنواع من المستخدمين',
        'صلاحيات مفصلة',
        'عزل بيانات المكاتب',
        'تشفير البيانات',
        'سجل الأنشطة',
        'نسخ احتياطي تلقائي'
      ]
    },
    {
      category: 'نظام الاشتراكات',
      icon: Briefcase,
      description: 'إدارة متقدمة للاشتراكات والخطط',
      items: [
        'خطط اشتراك متعددة',
        'فوترة تلقائية',
        'تتبع الاستخدام',
        'ترقية سهلة',
        'إدارة المدفوعات',
        'تقارير الاشتراكات'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold text-primary-600">LegalFlow</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/features" className="text-primary-600 font-semibold">الميزات</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-primary-600">الأسعار</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary-600">اتصل بنا</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link 
                to="/login" 
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                تسجيل الدخول
              </Link>
              <Link 
                to="/register" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                ابدأ الآن
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">الميزات الكاملة</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            اكتشف جميع الميزات والإمكانيات التي يوفرها نظام LegalFlow لإدارة مكتبك باحترافية
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.category}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            جاهز لتجربة جميع هذه الميزات؟
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            ابدأ تجربتك المجانية الآن واكتشف كيف يمكن لـ LegalFlow تحسين عملك
          </p>
          <Link 
            to="/register" 
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            ابدأ تجربتك المجانية
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 LegalFlow. جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  )
}

export default FeaturesPage

