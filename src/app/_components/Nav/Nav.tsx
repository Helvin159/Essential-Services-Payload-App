import React from 'react'
import Link from 'next/link'

import './_assets/style.css'

const Nav = () => {
  const navStyles: React.CSSProperties = {
    textAlign: 'center',
    padding: '1rem 0 2rem',
  }

  return (
    <nav className="text-center" style={{ ...navStyles }}>
      <ul
        style={{
          display: 'flex',
          listStyleType: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          padding: '0',
        }}
      >
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/apex-charts'}>Apex Charts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
