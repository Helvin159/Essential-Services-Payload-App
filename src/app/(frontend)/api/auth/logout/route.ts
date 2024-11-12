import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  let cookieStore = await cookies()

  cookieStore.set({
    name: 'home-heros-com-token',
    value: '',
    path: '/',
    expires: new Date(0),
  })

  return NextResponse.redirect('/logout')
}
