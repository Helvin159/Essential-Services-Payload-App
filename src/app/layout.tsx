import type { Metadata } from 'next'
import Nav from './_components/Nav/Nav'
import Footer from './_components/Footer'

export const metadata: Metadata = {
  title: 'Payload Practice',
  description: 'Payload CMS',
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
