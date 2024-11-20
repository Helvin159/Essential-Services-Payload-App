import { getPayload } from 'payload'
import config from '@payload-config'
import type { BasePayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { value } = await req.json()

  const payload: BasePayload = await getPayload({ config })

  try {
    const matchingServices: string[] = await payload
      .find({
        collection: 'services',
        where: {
          serviceName: {
            like: value,
          },
        },
        limit: 9,
      })
      .then((data): string[] => data.docs.map((service): string => service.id))

    const results = await payload
      .find({
        collection: 'users',
        where: {
          role: {
            equals: 'service-provider',
          },
          servicesOffered: {
            in: matchingServices,
            exists: true,
          },
        },
        limit: 9,
      })
      .then((data) => data.docs)

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
