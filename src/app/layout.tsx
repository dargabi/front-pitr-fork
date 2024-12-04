import type { Metadata } from 'next'
import { Quantico } from 'next/font/google'
import './globals.css'

import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'
import PopUp from '@/components/global/PopUp'
import { Toaster } from 'sonner'

const quantico = Quantico({ weight: '700', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Pit Rivals',
  description: 'Become A Legend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quantico.className}>
        <Header />
        <Toaster 
          theme='dark'
          toastOptions={{
            style: {
              borderRadius: 0,
              border: 'none'
            },
            className: `${quantico.className}`,
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}
