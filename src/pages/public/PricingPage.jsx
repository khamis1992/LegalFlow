import { Link } from 'react-router-dom'
import { Building2, CheckCircle, ArrowLeft } from 'lucide-react'

function PricingPage() {
  const plans = [
    {
      name: 'الأساسية',
      price: '499',
      description: 'للمكاتب الصغيرة',
      features: [
        'حتى 5 مستخدمين',
        'إدارة القضايا',
        'إدارة العملاء',
        'إدارة المستندات',
        'التقارير الأساسية',
        'دعم فني عبر البريد',
      ],
      limitations: [
        'لا يشمل الموارد البشرية',
        'لا يشمل نظام الرواتب',
      ]
    },
    {
      name: 'المتقدمة',
      price: '999',
      description: 'للمكاتب المتوسطة',
      features: [
        'حتى 20 مستخدم',
        'جميع مميزات الخطة الأساسية',
        'نظام محاسبي متكامل',
        'إدارة الموارد البشرية',
        'نظام المواعيد المتقدم',
        'التقارير المتقدمة',
        'دعم فني عبر الهاتف',
        'بوابة العملاء',
      ],
      limitations: [],
      popular: true
    },
    {
      name: 'المؤسسية',
      price: 'حسب الطلب',
      description: 'للمكاتب الكبيرة',
      features: [
        'عدد غير محدود من المستخدمين',
        'جميع مميزات الخطة المتقدمة',
        'نظام الرواتب الكامل',
        'تقارير مخصصة',
        'مدير حساب مخصص',
        'تدريب متقدم',
        'دعم فني 24/7',
        'تكامل مع الأنظمة الأخرى',
      ],
      limitations: []
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold text-primary-600">LawTec ERP</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/features" className="text-gray-700 hover:text-primary-600">الميزات</Link>
              <Link to="/pricing" className="text-primary-600 font-semibold">الأسعار</Link>
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">خطط الأسعار</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            اختر الخطة المناسبة لحجم مكتبك واحتياجاتك
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-lg border-2 ${
                  plan.popular ? 'border-primary-600 shadow-xl' : 'border-gray-200'
                } p-8 hover:shadow-lg transition-shadow`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      الأكثر شعبية
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  {plan.price !== 'حسب الطلب' ? (
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600"> ريال/شهرياً</span>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/register"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.price !== 'حسب الطلب' ? 'ابدأ الآن' : 'اتصل بنا'}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">الأسئلة الشائعة</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">هل يوجد فترة تجريبية مجانية؟</h3>
                <p className="text-gray-700">نعم، نوفر فترة تجريبية مجانية لمدة 30 يوماً لجميع الخطط بدون الحاجة لبطاقة ائتمان.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">هل يمكن ترقية الخطة لاحقاً؟</h3>
                <p className="text-gray-700">بالتأكيد، يمكنك ترقية خطتك في أي وقت بسهولة من لوحة التحكم.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">هل الأسعار شاملة الضريبة؟</h3>
                <p className="text-gray-700">الأسعار المعروضة لا تشمل ضريبة القيمة المضافة (15%).</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">ما هي طرق الدفع المتاحة؟</h3>
                <p className="text-gray-700">نقبل جميع طرق الدفع الإلكترونية بما في ذلك البطاقات الائتمانية والتحويل البنكي.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            جاهز للبدء؟
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            ابدأ تجربتك المجانية لمدة 30 يوماً بدون بطاقة ائتمان
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
          <p className="text-gray-400">© 2025 LawTec ERP. جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  )
}

export default PricingPage

