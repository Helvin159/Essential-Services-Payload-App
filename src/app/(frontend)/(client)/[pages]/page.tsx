import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import BlogTemplate from '@/app/_components/BlogTemplate/BlogTemplate'
import DefaultTemplate from '@/app/_templates/DefaultTemplate/DefaultTemplate'
import ArticleTemplate from '@/app/_templates/ArticleTemplate/ArticleTemplate'

const Page = async ({ params }: { params: Promise<{ pages: string }> }) => {
  const payload = await getPayload({ config })
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
