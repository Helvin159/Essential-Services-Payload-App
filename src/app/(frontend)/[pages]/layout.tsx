import type { Metadata } from 'next'
import Nav from '@/app/_components/Nav/Nav'
import Footer from '@/app/_components/Footer'

import '@/app/_assets/css/style.css'

export const metadata: Metadata = {
  title: 'Home Heros',
  description: 'Home Heros Payload CMS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
