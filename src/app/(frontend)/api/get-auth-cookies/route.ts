import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('home-heros-com-token')

  if (!token) {
    return NextResponse.json({ error: 'Authentication token is missing.' }, { status: 401 })
  }

  return NextResponse.json({ token })
}
