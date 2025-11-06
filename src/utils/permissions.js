import { USER_ROLES } from './constants'

/**
 * نظام إدارة الصلاحيات للأدوار المختلفة
 */

// تعريف الصلاحيات لكل دور
const ROLE_PERMISSIONS = {
  [USER_ROLES.SUPER_ADMIN]: {
    lawFirms: { create: true, read: true, update: true, delete: true },
    subscriptions: { create: true, read: true, update: true, delete: true },
    plans: { create: true, read: true, update: true, delete: true },
    systemSettings: { read: true, update: true },
    allReports: { read: true },
  },
  
  [USER_ROLES.OWNER]: {
    team: { create: true, read: true, update: true, delete: true },
    cases: { create: true, read: true, update: true, delete: true },
    clients: { create: true, read: true, update: true, delete: true },
    documents: { create: true, read: true, update: true, delete: true },
    invoices: { create: true, read: true, update: true, delete: true },
    expenses: { create: true, read: true, update: true, delete: true },
    salaries: { create: true, read: true, update: true, delete: true },
    reports: { read: true },
    firmSettings: { read: true, update: true },
    subscription: { read: true, update: true },
  },
  
  [USER_ROLES.MANAGER]: {
    team: { read: true, update: true },
    cases: { create: true, read: true, update: true, delete: true },
    clients: { create: true, read: true, update: true, delete: true },
    documents: { create: true, read: true, update: true, delete: true },
    tasks: { create: true, read: true, update: true, delete: true },
    appointments: { create: true, read: true, update: true, delete: true },
    reports: { read: true },
  },
  
  [USER_ROLES.LAWYER]: {
    myCases: { read: true, update: true },
    myClients: { read: true, update: true },
    documents: { create: true, read: true, update: true },
    appointments: { create: true, read: true, update: true },
    myTasks: { read: true, update: true },
    timesheet: { create: true, read: true, update: true },
  },
  
  [USER_ROLES.EMPLOYEE]: {
    clients: { create: true, read: true, update: true },
    documents: { create: true, read: true },
    appointments: { create: true, read: true, update: true },
    invoices: { create: true, read: true },
    myTasks: { read: true, update: true },
  },
  
  [USER_ROLES.CLIENT]: {
    myCases: { read: true },
    myDocuments: { create: true, read: true },
    myAppointments: { create: true, read: true },
    myInvoices: { read: true },
    consultations: { create: true, read: true },
    profile: { read: true, update: true },
  },
}

/**
 * التحقق من صلاحية المستخدم لإجراء عملية معينة
 * @param {string} userRole - دور المستخدم
 * @param {string} resource - المورد (cases, clients, etc.)
 * @param {string} action - العملية (create, read, update, delete)
 * @returns {boolean} - هل لديه صلاحية أم لا
 */
export function hasPermission(userRole, resource, action) {
  if (!userRole || !resource || !action) return false
  
  const permissions = ROLE_PERMISSIONS[userRole]
  if (!permissions) return false
  
  const resourcePermissions = permissions[resource]
  if (!resourcePermissions) return false
  
  return resourcePermissions[action] === true
}

/**
 * التحقق من أن المستخدم يملك أحد الأدوار المحددة
 * @param {string} userRole - دور المستخدم الحالي
 * @param {string[]} allowedRoles - الأدوار المسموح بها
 * @returns {boolean}
 */
export function hasRole(userRole, allowedRoles) {
  if (!userRole || !Array.isArray(allowedRoles)) return false
  return allowedRoles.includes(userRole)
}

/**
 * الحصول على جميع صلاحيات دور معين
 * @param {string} userRole - دور المستخدم
 * @returns {object} - كائن الصلاحيات
 */
export function getRolePermissions(userRole) {
  return ROLE_PERMISSIONS[userRole] || {}
}

/**
 * التحقق من أن المستخدم هو صاحب المورد
 * @param {string} userId - معرف المستخدم
 * @param {string} resourceOwnerId - معرف صاحب المورد
 * @returns {boolean}
 */
export function isResourceOwner(userId, resourceOwnerId) {
  return userId === resourceOwnerId
}

/**
 * التحقق من أن المستخدم ينتمي لنفس المكتب
 * @param {string} userFirmId - معرف مكتب المستخدم
 * @param {string} resourceFirmId - معرف مكتب المورد
 * @returns {boolean}
 */
export function isSameFirm(userFirmId, resourceFirmId) {
  return userFirmId === resourceFirmId
}

