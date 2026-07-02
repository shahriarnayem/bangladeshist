import { getSession } from '@/lib/session';import { redirect } from 'next/navigation';import AdminSidebar from '@/components/AdminSidebar';
export default async function DashboardLayout({children}){const s=await getSession();if(!s)redirect('/login');return <main className="container py-12 admin-layout"><AdminSidebar/><div>{children}</div></main>}
