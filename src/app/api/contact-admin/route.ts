import { NextResponse } from 'next/server'
import payload from 'payload'
import { AdminMessage } from '../../_utils/type'

export async function POST(req: Request) {
  try {
    const { name, title, message }: AdminMessage = await req.json()

    await payload.create({
      collection: 'admin-messages',
      data: { name, title, message },
    })

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ message: 'Message failed' }, { status: 500 })
  }
}
