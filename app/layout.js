import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata={title:'Bangladeshist Magazine CMS',description:'A full digital magazine CMS'};
export default function RootLayout({children}){return <html lang="en" data-scroll-behavior="smooth"><body><Header/>{children}<Footer/></body></html>}
