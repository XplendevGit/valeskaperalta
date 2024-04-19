import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/sections/Header'
import TopHeader from '@/components/sections/TopHeader'
import Footer from '@/components/sections/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nutricionista Valeska Peralta',
  description: 'Valeska Peralta Web Page By Xplendev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
