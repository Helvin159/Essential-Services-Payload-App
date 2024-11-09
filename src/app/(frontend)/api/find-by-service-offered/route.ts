import { NextApiRequest, NextApiResponse } from 'next'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import type { User } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { searchVal } = await req.json()

  const payload = await getPayloadHMR({ config })

  if (req.method === 'POST') {
    try {
      const results = await payload
        .find({
          collection: 'users',
          where: {
            // servicesOffered: {
            //   contains: searchVal,
            // },
            fullName: {
              contains: searchVal,
            },
          },
        })
        .then((data) => data.docs)

      return NextResponse.json(results, { status: 200 })
    } catch (e) {
      console.error(e)
      return NextResponse.json({ error: 'Error fetching data.' }, { status: 500 })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }
}
