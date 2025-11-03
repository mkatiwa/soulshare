'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import useAuth from '@/hooks/useAuth'
import styles from './page.module.css'

export default function LoginPage() {
  const router = useRouter()
const { login } = useAuth()
  
  const [loginMethod, setLoginMethod] = useState<'username' | 'phone'>('username')
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    isAnonymous: false,
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (loginMethod === 'username') {
      if (!formData.username.trim()) {
        newErrors.username = 'Username is required'
      }
    } else {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required'
      } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault()
    
    if (!validate()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const loginData = loginMethod === 'username' 
        ? { username: formData.username, password: formData.password, isAnonymous: formData.isAnonymous }
        : { phone: formData.phone, password: formData.password, isAnonymous: formData.isAnonymous }
      
      await login(loginData)
      router.push('/')
    } catch (error) {
      console.error('Login error:', error)
      setErrors({ submit: 'Invalid credentials. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formCard}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>Welcome Back</h1>
            <p className={styles.subtitle}>Login to your SoulShare account</p>
          </div>

          {/* Login Method Toggle */}
          <div className={styles.toggleContainer}>
            <button
              type="button"
              onClick={() => {
                setLoginMethod('username')
                setErrors({})
              }}
              className={`${styles.toggleButton} ${
                loginMethod === 'username'
                  ? styles.toggleButtonActive
                  : styles.toggleButtonInactive
              }`}
            >
              Username
            </button>
            <button
              type="button"
              onClick={() => {
                setLoginMethod('phone')
                setErrors({})
              }}
              className={`${styles.toggleButton} ${
                loginMethod === 'phone'
                  ? styles.toggleButtonActive
                  : styles.toggleButtonInactive
              }`}
            >
              Phone Number
            </button>
          </div>

          {/* Anonymous Option */}
          <div className={styles.anonymousOption}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="isAnonymous"
                checked={formData.isAnonymous}
                onChange={handleChange}
                className="w-6 h-6 text-calmPurple-600 border-gray-300 rounded focus:ring-calmPurple-500"
              />
              <span className={styles.checkboxText}>
                <strong>Anonymous Login</strong> - Login without revealing your identity
              </span>
            </label>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Username or Phone Input */}
            {loginMethod === 'username' ? (
              <div className={styles.formGroup}>
                <label htmlFor="username" className={styles.label}>
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.username ? styles.inputError : ''}`}
                  placeholder="Enter your username"
                  autoComplete="username"
                />
                {errors.username && <p className={styles.errorMessage}>{errors.username}</p>}
              </div>
            ) : (
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  placeholder="+1 (555) 123-4567"
                  autoComplete="tel"
                />
                {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}
              </div>
            )}

            {/* Password */}
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
            </div>

            {/* Forgot Password Link */}
            <div className={styles.forgotLink}>
              <Link href="#">Forgot password?</Link>
            </div>

            {errors.submit && (
              <div className={styles.errorBox}>
                {errors.submit}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
</form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Don't have an account?{' '}
              <Link href="/auth/signup" className={styles.footerLink}>
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
</div>
)
}
