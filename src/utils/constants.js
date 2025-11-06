/**
 * الثوابت العامة للنظام
 */

// أدوار المستخدمين
export const USER_ROLES = {
  SUPER_ADMIN: 'super-admin',
  OWNER: 'owner',
  MANAGER: 'manager',
  LAWYER: 'lawyer',
  EMPLOYEE: 'employee',
  CLIENT: 'client',
}

// حالات القضايا
export const CASE_STATUS = {
  NEW: 'new',
  IN_PROGRESS: 'in-progress',
  ON_HOLD: 'on-hold',
  CLOSED: 'closed',
  ARCHIVED: 'archived',
}

// أنواع القضايا
export const CASE_TYPES = {
  CRIMINAL: 'criminal',
  CIVIL: 'civil',
  COMMERCIAL: 'commercial',
  LABOR: 'labor',
  FAMILY: 'family',
  ADMINISTRATIVE: 'administrative',
}

// أولويات القضايا
export const CASE_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
}

// حالات الفواتير
export const INVOICE_STATUS = {
  DRAFT: 'draft',
  SENT: 'sent',
  PAID: 'paid',
  OVERDUE: 'overdue',
  CANCELLED: 'cancelled',
}

// حالات الاشتراكات
export const SUBSCRIPTION_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  EXPIRED: 'expired',
  CANCELLED: 'cancelled',
}

// دورة الفوترة
export const BILLING_CYCLE = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
}

// أنواع المستندات
export const DOCUMENT_TYPES = {
  CONTRACT: 'contract',
  COURT_DOCUMENT: 'court-document',
  EVIDENCE: 'evidence',
  ID_DOCUMENT: 'id-document',
  OTHER: 'other',
}

// حالات الموظفين
export const EMPLOYEE_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  ON_LEAVE: 'on-leave',
  TERMINATED: 'terminated',
}

// أنواع الإجازات
export const LEAVE_TYPES = {
  ANNUAL: 'annual',
  SICK: 'sick',
  EMERGENCY: 'emergency',
  UNPAID: 'unpaid',
}

