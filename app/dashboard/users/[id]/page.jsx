import { ObjectId } from 'mongodb';import { getDb } from '@/lib/mongodb';import UserForm from '@/components/UserForm';
export const dynamic='force-dynamic';
export default async function EditUser({params}){const {id}=await params;const db=await getDb();const u=await db.collection('users').findOne({_id:new ObjectId(id)});if(!u)return <h1>User not found</h1>;const user={...u,_id:u._id.toString(),password:''};return <div><h1 className="text-3xl font-black mb-8">Edit User</h1><UserForm user={user}/></div>}
