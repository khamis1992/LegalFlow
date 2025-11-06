/**
 * دوال API للتعامل مع الخادم
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

/**
 * دالة عامة لإجراء طلبات API
 */
async function apiCall(endpoint, options = {}) {
  const token = localStorage.getItem('token')
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config)
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'حدث خطأ في الطلب')
    }

    return await response.json()
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Auth API
export const authAPI = {
  login: (credentials) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  
  register: (data) => apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  logout: () => apiCall('/auth/logout', { method: 'POST' }),
  
  getCurrentUser: () => apiCall('/auth/me'),
}

// Cases API
export const casesAPI = {
  getAll: (firmId) => apiCall(`/cases?firmId=${firmId}`),
  getById: (id) => apiCall(`/cases/${id}`),
  create: (data) => apiCall('/cases', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id, data) => apiCall(`/cases/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id) => apiCall(`/cases/${id}`, { method: 'DELETE' }),
}

// Clients API
export const clientsAPI = {
  getAll: (firmId) => apiCall(`/clients?firmId=${firmId}`),
  getById: (id) => apiCall(`/clients/${id}`),
  create: (data) => apiCall('/clients', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id, data) => apiCall(`/clients/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id) => apiCall(`/clients/${id}`, { method: 'DELETE' }),
}

// Documents API
export const documentsAPI = {
  getAll: (params) => apiCall(`/documents?${new URLSearchParams(params)}`),
  getById: (id) => apiCall(`/documents/${id}`),
  upload: (formData) => {
    const token = localStorage.getItem('token')
    return fetch(`${API_BASE_URL}/documents/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }).then(res => res.json())
  },
  delete: (id) => apiCall(`/documents/${id}`, { method: 'DELETE' }),
}

// Invoices API
export const invoicesAPI = {
  getAll: (firmId) => apiCall(`/invoices?firmId=${firmId}`),
  getById: (id) => apiCall(`/invoices/${id}`),
  create: (data) => apiCall('/invoices', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id, data) => apiCall(`/invoices/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id) => apiCall(`/invoices/${id}`, { method: 'DELETE' }),
}

// Law Firms API (Super Admin)
export const lawFirmsAPI = {
  getAll: () => apiCall('/law-firms'),
  getById: (id) => apiCall(`/law-firms/${id}`),
  create: (data) => apiCall('/law-firms', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id, data) => apiCall(`/law-firms/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id) => apiCall(`/law-firms/${id}`, { method: 'DELETE' }),
}

// Subscriptions API
export const subscriptionsAPI = {
  getAll: () => apiCall('/subscriptions'),
  getById: (id) => apiCall(`/subscriptions/${id}`),
  create: (data) => apiCall('/subscriptions', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id, data) => apiCall(`/subscriptions/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
}

export default apiCall

