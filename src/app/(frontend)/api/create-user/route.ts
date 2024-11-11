import { NextRequest, NextResponse } from 'next/server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  const payload = await getPayloadHMR({ config })

  try {
    const { fullName, email, slug, role } = await req.json()

    const newUser = await payload.create({
      collection: 'users',
      data: {
        fullName,
        email,
        role,
        slug,
      },
    })

    return NextResponse.json({ success: true, user: newUser })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ success: false, error: e.message })
  }
}
