// app/[slug]/page.tsx
import React from 'react'
import { notFound } from 'next/navigation'
import payload from 'payload'
import DefaultTemplate from '../_components/DefaultTemplate/DefaultTemplate'

interface PageProps {
  params: {
    slug: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (!page.docs.length) {
    notFound()
  }

  const { template, content } = page.docs[0]

  switch (template) {
    case 'default':
    default:
      return <DefaultTemplate content={content} />
  }
}

export default Page
