import React from 'react'
import Link from 'next/link'

import './_assets/style.css'

const Nav = () => {
  return (
    <nav className="text-center">
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/service-pros'}>Our Pros</Link>
        </li>
        <li>
          <Link href={'/apex-charts'}>Apex Charts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
