'use client'

import { useState } from 'react'
export default function JournalPage() {
const [note, setNote] = useState('')
const [moods, setMoods] = useState<{id:number,score:number,note:string}[]>([])


const addEntry = () => {
const entry = { id: Date.now(), score: 3, note }
setMoods(prev => [entry, ...prev])
setNote('')
}


return (
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl font-semibold mb-4">Mood Journal</h2>
<div className="bg-white p-4 rounded-lg shadow mb-6">
<textarea value={note} onChange={(e)=>setNote(e.target.value)} placeholder="How are you feeling today?" className="w-full p-3 border rounded" />
<div className="flex justify-end mt-3">
<button onClick={addEntry} className="px-4 py-2 bg-calmPurple-600 text-white rounded">Save entry</button>
</div>
</div>


<div className="space-y-4">
{moods.map(m => (
<div key={m.id} className="p-4 bg-white rounded shadow">
<div className="text-sm text-gray-500 mb-2">Mood score: {m.score}</div>
<div>{m.note}</div>
</div>
))}
</div>
</div>
)
}