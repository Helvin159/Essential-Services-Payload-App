import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

const Page = async ({ params }: { params: Promise<{ pages: string }> }) => {
  const payload = await getPayloadHMR({ config })
  const { pages: slug } = await params

  const result = await payload
    .find({
      collection: 'reviews',
      where: {
        slug: {
          equals: slug,
        },
      },
    })
    .then((data) => data.docs)

  console.log(result)

  return <div>Rating</div>
}

export default Page
