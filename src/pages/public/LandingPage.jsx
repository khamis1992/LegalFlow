import { Link } from 'react-router-dom'
import { 
  Scale, Shield, Clock, Users, FileText, BarChart3, 
  CheckCircle, ArrowLeft, Star, Building2 
} from 'lucide-react'

function LandingPage() {
  const features = [
    {
      icon: Scale,
      title: 'إدارة القضايا',
      description: 'تتبع شامل لجميع القضايا من البداية حتى النهاية مع جدول زمني تفصيلي'
    },
    {
      icon: Users,
      title: 'إدارة العملاء',
      description: 'ملفات عملاء متكاملة مع تاريخ كامل للقضايا والمستندات'
    },
    {
      icon: FileText,
      title: 'إدارة المستندات',
      description: 'نظام أرشفة ذكي مع إمكانية البحث والوصول السريع'
    },
    {
      icon: BarChart3,
      title: 'تقارير وتحليلات',
      description: 'تقارير مالية وإدارية شاملة مع رسوم بيانية تفاعلية'
    },
    {
      icon: Clock,
      title: 'إدارة المواعيد',
      description: 'تقويم ذكي مع تذكيرات تلقائية للجلسات والمواعيد'
    },
    {
      icon: Shield,
      title: 'أمان عالي',
      description: 'حماية متقدمة للبيانات مع نظام صلاحيات متعدد المستويات'
    },
  ]

  const benefits = [
    'إدارة شاملة لجميع جوانب المكتب',
    'واجهة سهلة الاستخدام بالعربية',
    'تقارير مالية دقيقة ومفصلة',
    'نظام محاسبي متكامل',
    'إدارة الموارد البشرية',
    'بوابة خاصة للعملاء'
  ]

  const testimonials = [
    {
      name: 'د. خالد المحامي',
      firm: 'مكتب المحاماة الدولي',
      text: 'نظام رائع ساعدنا في تنظيم العمل وزيادة الإنتاجية بشكل كبير',
      rating: 5
    },
    {
      name: 'أ. سارة أحمد',
      firm: 'مكتب المستشار القانوني',
      text: 'أفضل نظام لإدارة مكاتب المحاماة، سهل الاستخدام ومتكامل',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold text-primary-600">LegalFlow</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/features" className="text-gray-700 hover:text-primary-600">الميزات</Link>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              نظام إدارة متكامل لمكاتب المحاماة
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              حلول رقمية شاملة لإدارة القضايا، العملاء، المستندات، والموارد المالية والبشرية
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link 
                to="/register" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                ابدأ تجربتك المجانية
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link 
                to="/features" 
                className="bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                اكتشف المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">الميزات الرئيسية</h2>
            <p className="text-xl text-gray-600">كل ما تحتاجه لإدارة مكتبك بكفاءة واحترافية</p>
          </div>

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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">لماذا تختار LawTec ERP؟</h2>
              <p className="text-xl text-gray-600">الحل الأمثل لمكاتب المحاماة العصرية</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">آراء العملاء</h2>
            <p className="text-xl text-gray-600">ماذا يقول عملاؤنا عن النظام</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.firm}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            جاهز للبدء في تحسين إدارة مكتبك؟
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            ابدأ تجربتك المجانية الآن ولا تحتاج لبطاقة ائتمان
          </p>
          <Link 
            to="/register" 
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            ابدأ مجاناً
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6" />
                <span className="text-xl font-bold">LegalFlow</span>
              </div>
              <p className="text-gray-400">
                نظام إدارة متكامل لمكاتب المحاماة
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">المنتج</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-400 hover:text-white">الميزات</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white">الأسعار</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">الدعم</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-400 hover:text-white">اتصل بنا</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">عن النظام</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">القانونية</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">الشروط والأحكام</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">سياسة الخصوصية</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© 2025 LegalFlow. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

