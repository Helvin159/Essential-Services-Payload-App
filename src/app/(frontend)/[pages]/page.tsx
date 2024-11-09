import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

import DefaultTemplate from '../../_components/DefaultTemplate/DefaultTemplate'

import './_assets/style.css'

const Page = async ({ params }: { params: Promise<{ pages: string }> }) => {
  const payload = await getPayloadHMR({ config })
  const { pages: slug } = await params

  const result = await payload
    .find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
    })
    .then((data) => data.docs)

  console.log(result)

  const { title, template, content, createdAt } = result[0]

  switch (template) {
    case 'default':
    default:
      return <DefaultTemplate title={title} content={content} />
  }
}

export default Page
