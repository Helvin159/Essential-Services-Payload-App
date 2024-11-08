import { NextRequest, NextResponse } from 'next/server'
import payload from 'payload'
import { createUser } from '../../_utils/utils'

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, password, role } = await req.json()

    const newUser = await payload.create({
      collection: 'users',
      data: {
        fullName,
        email,
        password,
        role,
      },
    })

    return NextResponse.json({ success: true, user: newUser })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ success: false, error: e.message })
  }
}
