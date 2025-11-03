'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import useAuth from '@/hooks/useAuth'
import styles from './page.module.css'

export default function SignupPage() {
  const router = useRouter()
const { signup } = useAuth()
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
    city: '',
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
    
    if (!formData.isAnonymous && !formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required for local connections'
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
      const signupData = {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        name: formData.isAnonymous ? undefined : formData.name,
        location: formData.location,
        city: formData.city,
        isAnonymous: formData.isAnonymous,
      }
      
      await signup(signupData)
      router.push('/')
    } catch (error) {
      console.error('Signup error:', error)
      setErrors({ submit: 'Failed to create account. Please try again.' })
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
            <h1 className={styles.title}>Create Your Account</h1>
            <p className={styles.subtitle}>Join SoulShare and start your wellbeing journey</p>
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
                <strong>Use Anonymous Mode</strong> - Hide your real name and use only your username
              </span>
            </label>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Name (shown only if not anonymous) */}
            {!formData.isAnonymous && (
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
              </div>
            )}

            {/* Username */}
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
                placeholder="Choose a unique username"
              />
              {errors.username && <p className={styles.errorMessage}>{errors.username}</p>}
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
            </div>

            {/* Phone */}
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
              />
              {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}
            </div>

            {/* Location Fields */}
            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <label htmlFor="city" className={styles.label}>
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.city ? styles.inputError : ''}`}
                  placeholder="Your city"
                />
                {errors.city && <p className={styles.errorMessage}>{errors.city}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="location" className={styles.label}>
                  Neighborhood (Optional)
                </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your neighborhood"
                />
              </div>
            </div>

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
                placeholder="At least 8 characters"
              />
              {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`}
                placeholder="Re-enter your password"
              />
              {errors.confirmPassword && <p className={styles.errorMessage}>{errors.confirmPassword}</p>}
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
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
</form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Already have an account?{' '}
              <Link href="/auth/login" className={styles.footerLink}>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
</div>
)
}
