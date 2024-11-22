import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config })

    const result = await payload
      .find({
        collection: 'users',
        limit: 0,
        sort: 'fullName',
      })
      .then((data) => data.docs)

    return NextResponse.json(result, { status: 200 })
  } catch (e) {
    console.error(e)

    return NextResponse.json('Error fetching data', { status: 500 })
  }
}
