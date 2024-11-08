// app/[slug]/page.tsx
import React from 'react'
import { notFound } from 'next/navigation'
import payload from 'payload'
import DefaultTemplate from '../_components/DefaultTemplate/DefaultTemplate'

const Page = async () => {
  // const { template, content } = page.docs[0]

  switch ('default') {
    case 'default':
    default:
      return <DefaultTemplate content={'null'} />
  }
}

export default Page
