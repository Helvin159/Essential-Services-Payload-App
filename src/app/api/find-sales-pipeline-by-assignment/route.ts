import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  const payload = await getPayload({ config })
  const { id } = await req.json()

  try {
    const res = await payload
      .find({
        collection: 'sales-pipeline',
        where: {
          assignedTo: {
            equals: id,
          },
        },
      })
      .then((data) => data.docs)

    return NextResponse.json(res, { status: 200 })
  } catch (e) {
    console.log(e)
    return NextResponse.json({ body: 'No Good' }, { status: 401 })
  }
}
