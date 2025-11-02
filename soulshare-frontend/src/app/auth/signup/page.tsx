'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import useAuth from '@/hooks/useAuth'


export default function SignupPage() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const { signup } = useAuth()
const router = useRouter()


const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault()
await signup({ email, password })
router.push('/')
}


return (
<div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
<h2 className="text-2xl font-semibold mb-4">Create an account</h2>
<form onSubmit={handleSubmit} className="space-y-4">
<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded" />
<input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-3 border rounded" />
<button className="w-full py-3 bg-calmPurple-600 text-white rounded">Sign up</button>
</form>
</div>
)
}