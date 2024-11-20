import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { NextRequest, NextResponse } from 'next/server'
import { setCookie } from '@/app/_utils/utils'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()
  const payload = await getPayloadHMR({ config })

  try {
    const user = await payload
      .login({
        collection: 'users',
        data: {
          email: email,
          password: password,
        },
      })
      .then((user) => user)
    const response = NextResponse.json({ user })

    if (user && user.token) {
      response.cookies.set('home-heros-com-token', user.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
      })
    } else {
      return NextResponse.json({ error: 'Authentication failed.' }, { status: 401 })
    }

    return response
  } catch (e) {
    console.error(e)
  }
}
