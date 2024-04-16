import { Inter } from 'next/font/google'
import './globals.css'
import TopHeader from '@/components/sections/TopHeader'
import Header from '@/components/sections/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nutricionista Valeska Peralta',
  description: 'Valeska Peralta Web Page By Xplendev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <Header />
        {children}
      </body>
    </html>
  )
}
