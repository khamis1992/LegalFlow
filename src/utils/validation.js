import { z } from 'zod'

/**
 * مخططات التحقق من البيانات باستخدام Zod
 */

// التحقق من بيانات تسجيل الدخول
export const loginSchema = z.object({
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  password: z.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
})

// التحقق من بيانات التسجيل
export const registerSchema = z.object({
  firmName: z.string().min(2, 'اسم المكتب يجب أن يكون حرفين على الأقل'),
  ownerName: z.string().min(2, 'اسم صاحب المكتب مطلوب'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  phone: z.string().regex(/^[0-9+\-\s]+$/, 'رقم الهاتف غير صحيح'),
  password: z.string().min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'كلمات المرور غير متطابقة',
  path: ['confirmPassword'],
})

// التحقق من بيانات القضية
export const caseSchema = z.object({
  title: z.string().min(3, 'عنوان القضية مطلوب'),
  caseNumber: z.string().min(1, 'رقم القضية مطلوب'),
  type: z.string().min(1, 'نوع القضية مطلوب'),
  status: z.string().default('new'),
  priority: z.string().default('medium'),
  clientId: z.string().min(1, 'يجب اختيار العميل'),
  lawyerId: z.string().optional(),
  court: z.string().optional(),
  courtFileNumber: z.string().optional(),
  description: z.string().optional(),
  openDate: z.string().optional(),
})

// التحقق من بيانات العميل
export const clientSchema = z.object({
  name: z.string().min(2, 'اسم العميل مطلوب'),
  email: z.string().email('البريد الإلكتروني غير صحيح').optional().or(z.literal('')),
  phone: z.string().regex(/^[0-9+\-\s]+$/, 'رقم الهاتف غير صحيح'),
  nationalId: z.string().optional(),
  type: z.enum(['individual', 'company']).default('individual'),
  address: z.string().optional(),
})

// التحقق من بيانات الفاتورة
export const invoiceSchema = z.object({
  clientId: z.string().min(1, 'يجب اختيار العميل'),
  caseId: z.string().optional(),
  items: z.array(z.object({
    description: z.string().min(1, 'وصف البند مطلوب'),
    quantity: z.number().min(1, 'الكمية يجب أن تكون 1 على الأقل'),
    unitPrice: z.number().min(0, 'السعر يجب أن يكون أكبر من أو يساوي صفر'),
  })).min(1, 'يجب إضافة بند واحد على الأقل'),
  tax: z.number().min(0).default(0),
  issueDate: z.string(),
  dueDate: z.string(),
})

// التحقق من بيانات الموظف
export const employeeSchema = z.object({
  name: z.string().min(2, 'اسم الموظف مطلوب'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  phone: z.string().regex(/^[0-9+\-\s]+$/, 'رقم الهاتف غير صحيح'),
  role: z.enum(['manager', 'lawyer', 'employee']),
  position: z.string().min(1, 'المنصب مطلوب'),
  salary: z.number().min(0, 'الراتب يجب أن يكون أكبر من أو يساوي صفر'),
  hireDate: z.string(),
  password: z.string().min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'),
})

// التحقق من بيانات الموعد
export const appointmentSchema = z.object({
  title: z.string().min(3, 'عنوان الموعد مطلوب'),
  type: z.enum(['consultation', 'court-session', 'meeting', 'other']),
  clientId: z.string().optional(),
  caseId: z.string().optional(),
  date: z.string(),
  time: z.string(),
  duration: z.number().min(15, 'المدة يجب أن تكون 15 دقيقة على الأقل'),
  location: z.string().optional(),
  notes: z.string().optional(),
})

// التحقق من بيانات المستند
export const documentSchema = z.object({
  title: z.string().min(2, 'عنوان المستند مطلوب'),
  type: z.string().min(1, 'نوع المستند مطلوب'),
  caseId: z.string().optional(),
  clientId: z.string().optional(),
  isConfidential: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
})

/**
 * دالة للتحقق من صحة البيانات
 * @param {z.ZodSchema} schema - مخطط Zod
 * @param {object} data - البيانات المراد التحقق منها
 * @returns {object} - نتيجة التحقق
 */
export function validate(schema, data) {
  try {
    const validatedData = schema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce((acc, err) => {
        const path = err.path.join('.')
        acc[path] = err.message
        return acc
      }, {})
      return { success: false, errors }
    }
    return { success: false, errors: { _general: 'حدث خطأ في التحقق من البيانات' } }
  }
}

