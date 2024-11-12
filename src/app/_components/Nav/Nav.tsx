'use client'
import React from 'react'
import Link from 'next/link'
import { useAuthContext } from '@/app/_context/AuthContext'
import LongInButton from './_components/LongInButton'
import LongOutButton from './_components/LongOutButton'

const Nav = () => {
  const { userCtx, loggedIn } = useAuthContext()

  return (
    <nav className="header-navigation text-center">
      <div className="header-navigation__logo">
        <p>Home Heros</p>
      </div>
      <div className="header-navigation__link-list">
        <div>
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
        </div>
        <div>
          {loggedIn && <Link href={'/dashboard'}>Dashboard</Link>}
          {!loggedIn && <LongInButton />}
          {loggedIn && <LongOutButton />}
        </div>
      </div>
    </nav>
  )
}

export default Nav
