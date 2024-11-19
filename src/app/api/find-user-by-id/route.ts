import { getPayload } from 'payload'
import config from '@payload-config'
import type { BasePayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { value } = await req.json()

  const payload: BasePayload = await getPayload({ config })

  try {
    const results = await payload
      .findByID({
        collection: 'users',
        id: value,
      })
      .then((data) => data)

    return NextResponse.json(results, { status: 200 })
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      {
        error: `
    Error fetching data.
    See message ${JSON.stringify(e)}

    `,
        e,
      },
      { status: 500 },
    )
  }
}
