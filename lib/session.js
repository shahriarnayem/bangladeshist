import { cookies } from 'next/headers';
const NAME='mag_session';
export async function createSession(user){ const c=await cookies(); c.set(NAME, JSON.stringify(user), { httpOnly:true, sameSite:'lax', secure:process.env.NODE_ENV==='production', path:'/', maxAge:60*60*24*7 }); }
export async function getSession(){ const c=await cookies(); const v=c.get(NAME)?.value; if(!v)return null; try{return JSON.parse(v)}catch{return null} }
export async function destroySession(){ const c=await cookies(); c.delete(NAME); }
export function canManageUsers(s){return s?.role==='admin'}
export function canManageArticles(s){return ['admin','writer'].includes(s?.role)}
export function canManageComments(s){return ['admin','writer'].includes(s?.role)}
