// @ts-expect-error: allow side-effect CSS import without type declarations
import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/hooks/useAuth'

export const metadata = {
    title: 'SoulShare',
    description: 'Community wellbeing & resource sharing platform'
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gradient-to-br from-calmPurple-50 to-calmPurple-100 text-gray-900">
                <AuthProvider>
                    <Navbar />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    )
}