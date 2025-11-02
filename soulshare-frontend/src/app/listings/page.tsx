'use client'
import { useState } from 'react'


export default function ListingsPage(){
const [items, setItems] = useState([{id:1,title:'Leftover rice',desc:'2 boxes available',loc:'Neighborhood A'}])
return (
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold mb-4">Community Listings</h2>
<div className="space-y-4">
{items.map(i => (
<div key={i.id} className="p-4 bg-white rounded shadow">
<h3 className="font-semibold">{i.title}</h3>
<p className="text-sm text-gray-600">{i.desc}</p>
<div className="text-xs text-gray-400 mt-2">{i.loc}</div>
</div>
))}
</div>
</div>
)
}