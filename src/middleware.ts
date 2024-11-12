import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  console.log('Middleware invoked for:', req.url)

  const token = req.cookies.get('home-heros-com-token')

  if (!token) {
    console.log('No token found, redirecting to login.')

    return NextResponse.redirect(new URL('/', req.url))
  }
  console.log('Token found, proceeding to requested page.')
  return NextResponse.next()
}

export const config = { matcher: ['/dashboard', '/dashboard/:path*', '/profile/:path*'] }
