import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      <p>Practice Payload App</p>
      <Link href="/admin">Admin</Link>
    </footer>
  )
}

export default Footer
