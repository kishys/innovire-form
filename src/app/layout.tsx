import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Innovire Event Registration',
  description: 'Register for Innovire\'s Electromagnet Workshop - hands-on STEM learning experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}