'use client';
import Link from 'next/link';import { useRouter } from 'next/navigation';
export default function UserActions({id}){const r=useRouter();async function del(){if(!confirm('Delete user?'))return;const res=await fetch(`/api/users/${id}`,{method:'DELETE'});const d=await res.json();if(!res.ok)return alert(d.error||'Failed');r.refresh()}return <div className="flex gap-3"><Link href={`/dashboard/users/${id}`} className="text-red-500">Edit</Link><button className="text-red-500" onClick={del}>Delete</button></div>}
