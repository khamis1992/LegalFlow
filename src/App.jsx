import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { TenantProvider } from './context/TenantContext'
import { AppProvider } from './context/AppContext'

// Auth Pages
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'

// Public Pages
import LandingPage from './pages/public/LandingPage'
import FeaturesPage from './pages/public/FeaturesPage'
import PricingPage from './pages/public/PricingPage'

// Protected Route Wrapper
import ProtectedRoute from './components/shared/ProtectedRoute'

// Role-based Route Components
import SuperAdminRoutes from './routes/SuperAdminRoutes'
import OwnerRoutes from './routes/OwnerRoutes'
import ManagerRoutes from './routes/ManagerRoutes'
import LawyerRoutes from './routes/LawyerRoutes'
import EmployeeRoutes from './routes/EmployeeRoutes'
import ClientRoutes from './routes/ClientRoutes'

function App() {
  return (
    <AuthProvider>
      <TenantProvider>
        <AppProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            
            {/* Protected Routes by Role */}
            <Route 
              path="/super-admin/*" 
              element={
                <ProtectedRoute requiredRole="super-admin">
                  <SuperAdminRoutes />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/owner/*" 
              element={
                <ProtectedRoute requiredRole="owner">
                  <OwnerRoutes />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/manager/*" 
              element={
                <ProtectedRoute requiredRole="manager">
                  <ManagerRoutes />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/lawyer/*" 
              element={
                <ProtectedRoute requiredRole="lawyer">
                  <LawyerRoutes />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/employee/*" 
              element={
                <ProtectedRoute requiredRole="employee">
                  <EmployeeRoutes />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/client/*" 
              element={
                <ProtectedRoute requiredRole="client">
                  <ClientRoutes />
                </ProtectedRoute>
              } 
            />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppProvider>
      </TenantProvider>
    </AuthProvider>
  )
}

export default App

