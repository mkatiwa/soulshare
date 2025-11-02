'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type AuthUser = { email: string } | null

type AuthContextType = {
    user: AuthUser
    login: (creds: { email: string; password?: string }) => Promise<void>
    signup: (creds: { email: string; password?: string }) => Promise<void>
    logout: () => void
}

// createContext with undefined and explicit type to avoid mismatch
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthUser>(null)

    const login = async ({ email }: { email: string; password?: string }) => {
        // mock login — replace with real API
        setUser({ email })
    }
    const signup = async ({ email }: { email: string; password?: string }) => {
        setUser({ email })
    }
    const logout = () => setUser(null)

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