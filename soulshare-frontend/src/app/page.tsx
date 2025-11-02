import Link from 'next/link'


export default function HomePage() {
return (
<section className="text-center py-20">
<h1 className="text-5xl font-extrabold text-calmPurple-700 mb-4">SoulShare 💜</h1>
<p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
A safe, local community platform for emotional support and resource sharing.
</p>


<div className="flex justify-center gap-4">
<Link href="/auth/login" className="px-6 py-3 bg-calmPurple-600 text-white rounded-lg shadow">Login</Link>
<Link href="/auth/signup" className="px-6 py-3 bg-white border border-calmPurple-600 text-calmPurple-700 rounded-lg">Sign up</Link>
</div>


<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 bg-white rounded-xl shadow">
<h3 className="font-semibold text-xl mb-2">Mood Journal</h3>
<p className="text-sm text-gray-600">Track your mood, jot private notes, and see weekly trends.</p>
</div>
<div className="p-6 bg-white rounded-xl shadow">
<h3 className="font-semibold text-xl mb-2">Community Sharing</h3>
<p className="text-sm text-gray-600">Share items or find help in your neighborhood.</p>
</div>
</div>
</section>
)
}