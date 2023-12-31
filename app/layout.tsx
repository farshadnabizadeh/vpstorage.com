import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopBar from './Components/TopBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'V P S T O R A G E',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full min-h-screen font-Poppins`}>
        <div className='w-full sticky top-0 z-10'>
          <TopBar />
          <Header />
        </div>
        <main>
          {children}
        </main>
        <div className='w-full'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
