import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

import DefaultTemplate from '@/app/_components/DefaultTemplate/DefaultTemplate'
import ArticleTemplate from '@/app/_components/ArticleTemplate/ArticleTemplate'
import BlogTemplate from '@/app/_components/BlogTemplate/BlogTemplate'

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

  const { title, template, content } = result[0]

  switch (template) {
    case 'blog':
      return <BlogTemplate />
    case 'article':
      return <ArticleTemplate title={title} content={content} />
    default:
      return <DefaultTemplate title={title} content={content} />
  }
}

export default Page
