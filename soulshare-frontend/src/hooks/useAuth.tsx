'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type AuthUser = { 
  email?: string
  username?: string
  phone?: string
  isAnonymous?: boolean
} | null

type SignupData = {
  username: string
  email: string
  phone: string
  password: string
  name?: string
  location?: string
  city?: string
  isAnonymous?: boolean
}

type LoginData = {
  username?: string
  phone?: string
  password: string
  isAnonymous?: boolean
}

type AuthContextType = {
  user: AuthUser
  login: (creds: LoginData) => Promise<void>
  signup: (creds: SignupData) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null)

  const login = async (creds: LoginData) => {
    // Mock login — replace with real API
    // In a real app, you would call your API endpoint here
    console.log('Login attempt:', creds)
    
    // For anonymous login, store minimal info
    if (creds.isAnonymous) {
      setUser({
        username: creds.username || 'Anonymous',
        isAnonymous: true
      })
    } else if (creds.username) {
      setUser({
        username: creds.username,
        email: creds.username + '@soulshare.local', // Mock email
        isAnonymous: false
      })
    } else if (creds.phone) {
      setUser({
        phone: creds.phone,
        isAnonymous: false
      })
    }
  }

  const signup = async (creds: SignupData) => {
    // Mock signup — replace with real API
    // In a real app, you would call your API endpoint here
    console.log('Signup attempt:', creds)
    
    // Store user based on anonymous setting
    if (creds.isAnonymous) {
      setUser({
        username: creds.username,
        isAnonymous: true
      })
    } else {
      setUser({
        username: creds.username,
        email: creds.email,
        phone: creds.phone,
        isAnonymous: false
      })
    }
  }

  const logout = () => {
    setUser(null)
    // In a real app, you might want to clear tokens/cookies here
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
