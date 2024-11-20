import { NextRequest, NextResponse } from 'next/server'
import { BasePayload, getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  const payload: BasePayload = await getPayload({ config })
  const { id } = await req.json()

  try {
    const res = await payload
      .find({
        collection: 'deals',
        where: {
          user: id,
        },
      })
      .then((data) => data)

    return NextResponse.json(res, { status: 200 })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ body: 'Failed' }, { status: 401 })
  }
}
