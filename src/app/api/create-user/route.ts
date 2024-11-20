import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  const payload = await getPayload({ config })

  try {
    const { fullName, email, slug, role } = await req.json()

    const newUser = await payload.create({
      collection: 'users',
      data: {
        fullName,
        email,
        role,
        slug,
        membership: 'basic-membership',
      },
    })

    return NextResponse.json({ success: true, user: newUser })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ success: false, error: e.message })
  }
}
