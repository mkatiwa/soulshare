'use client'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'


export default function Navbar(){
const { user, logout } = useAuth()
return (
<nav className="bg-white/60 backdrop-blur sticky top-0 z-20">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<Link href="/" className="font-bold text-xl text-calmPurple-700">SoulShare</Link>
<div className="flex items-center gap-4">
<Link href="/listings" className="text-gray-700">Listings</Link>
<Link href="/journal" className="text-gray-700">Journal</Link>
<Link href="/support" className="text-gray-700">Support</Link>
{user ? (
<button onClick={logout} className="px-3 py-1 bg-calmPurple-600 text-white rounded">Logout</button>
) : (
<Link href="/auth/login" className="px-3 py-1 border rounded">Login</Link>
)}
</div>
</div>
</nav>
)
}