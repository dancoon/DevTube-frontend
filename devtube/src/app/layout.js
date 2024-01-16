import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevTube',
  description: 'Youtube for devs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col text-center`}>
        <Header />
        <main className='grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
