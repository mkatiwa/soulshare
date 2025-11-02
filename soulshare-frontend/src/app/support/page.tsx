'use client'
import { useState } from 'react'


export default function SupportPage(){
const [threads, setThreads] = useState([{id:1, name:'Peer listener 1', last:'Hey, how are you?'}])
return (
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold mb-4">Peer Support</h2>
<div className="space-y-3">
{threads.map(t => (
<div key={t.id} className="p-3 bg-white rounded shadow">
<div className="font-medium">{t.name}</div>
<div className="text-sm text-gray-600">{t.last}</div>
</div>
))}
</div>
</div>
)
}