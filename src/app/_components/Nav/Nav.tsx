import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="text-center">
      <div>
        <p>Home Heros</p>
      </div>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/service-pros'}>Our Heros</Link>
        </li>
        <li>
          <Link href={'/charts'}>Charts</Link>
        </li>

        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
