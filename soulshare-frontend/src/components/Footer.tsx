
'use client'
import Link from 'next/link'
import { useState, FormEvent } from 'react'

export default function Footer() {
    const [email, setEmail] = useState('')

    const handleSubscribe = (e: FormEvent) => {
        e.preventDefault()
        // replace with real subscribe logic
        alert(`Thanks — ${email} subscribed`)
        setEmail('')
    }

    return (
        <footer className="mt-12 border-t bg-linear-to-t from-white to-gray-50 py-10 text-gray-700">
            <div className="max-w-6xl mx-auto px-6 md:flex md:items-start md:justify-between">
                <div className="mb-8 md:mb-0 md:w-1/3">
                    <Link href="/" className="inline-block font-bold text-2xl text-calmPurple-700">SoulShare</Link>
                    <p className="mt-3 text-sm text-gray-600">
                        Built for community wellbeing — safe space to share, learn and connect.
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                        <a href="mailto:hello@soulshare.example" className="text-sm text-gray-600 hover:text-calmPurple-700">hello@soulshare.example</a>
                        <span className="text-gray-300">|</span>
                        <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-calmPurple-700">+1 (234) 567-890</a>
                    </div>

                    <div className="mt-4 flex gap-3">
                        <a aria-label="Twitter" href="#" className="p-2 rounded-md hover:bg-gray-100">
                            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.7-.7.4-1.5.7-2.3.9C16.6 6 15.7 5.5 14.6 5.5c-1.7 0-3.1 1.4-3.1 3.1 0 .2 0 .4.1.6C8.4 9.2 6 8 4.3 6.2c-.3.6-.5 1.3-.5 2 0 1.4.7 2.6 1.8 3.3-.6 0-1.1-.2-1.6-.4v.1c0 1.9 1.3 3.5 3 3.9-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4 1.4H6c1.5.9 3.3 1.4 5.2 1.4 6.3 0 9.8-5.2 9.8-9.8v-.4c.7-.5 1.2-1.1 1.6-1.8-.6.3-1.3.6-2 .7z" />
                            </svg>
                        </a>
                        <a aria-label="GitHub" href="#" className="p-2 rounded-md hover:bg-gray-100">
                            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.8 3.1 8.9 7.4 10.3.5.1.7-.2.7-.5v-1.9c-3 .6-3.7-1.3-3.7-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.8 1.9-1.3-2.4-.3-4.9-1.2-4.9-5.2 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.2 1.1.9-.3 1.9-.5 2.9-.5 1 0 2 .2 2.9.5 2.3-1.4 3.2-1.1 3.2-1.1.6 1.7.2 2.9.1 3.2.7.8 1.1 1.8 1.1 3 0 4-2.5 4.9-4.9 5.2.5.4 1 .9 1 1.9v2.8c0 .3.2.6.7.5 4.3-1.4 7.4-5.5 7.4-10.3C23.2 5.4 18.3.5 12 .5z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:w-2/3">
                    <div>
                        <h4 className="font-medium text-gray-800">Quick actions</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><Link href="/listings" className="hover:text-calmPurple-700">Listings</Link></li>
                            <li><Link href="/journal" className="hover:text-calmPurple-700">Journal</Link></li>
                            <li><Link href="/support" className="hover:text-calmPurple-700">Support</Link></li>
                            <li><Link href="/auth/login" className="hover:text-calmPurple-700">Login</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-800">Stay in touch</h4>
                        <p className="mt-3 text-sm text-gray-600">Subscribe for updates, resources and community events.</p>

                        <form onSubmit={handleSubscribe} className="mt-4 flex max-w-sm">
                            <label htmlFor="footer-email" className="sr-only">Email</label>
                            <input
                                id="footer-email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-l-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-calmPurple-500"
                                placeholder="you@example.com"
                            />
                            <button className="rounded-r-md bg-calmPurple-600 px-4 py-2 text-white text-sm hover:bg-calmPurple-700" type="submit">Subscribe</button>
                        </form>

                        <div className="mt-4 text-xs text-gray-400">
                            We respect your privacy. Unsubscribe anytime.
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t pt-6">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <div>© {new Date().getFullYear()} SoulShare — Built for community wellbeing</div>
                    <div className="mt-3 md:mt-0 flex items-center gap-4">
                        <Link href="/terms" className="hover:text-calmPurple-700">Terms</Link>
                        <Link href="/privacy" className="hover:text-calmPurple-700">Privacy</Link>
                        <span className="text-gray-300">|</span>
                        <div className="text-xs text-gray-400">Made with care</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}