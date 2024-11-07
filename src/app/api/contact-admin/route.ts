import { NextResponse } from 'next/server'
import payload from 'payload'

export default async function POST(req: Request) {
  try {
    const { name, subject, message } = await req.json()

    await payload.create({
      collection: 'admin-messages',
      date: { name, subject, message },
    })

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ message: 'Message failed' }, { status: 500 })
  }
}
