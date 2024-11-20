import React from 'react'
import TemplateSelector from './TemplateSelector'
import { getPayload } from 'payload'
import config from '@payload-config'

const Page = async () => {
  const payload = await getPayload({ config })

  const res = await payload
    .find({
      collection: 'interest-rate-history',
    })
    .then((data) => data.docs)

  const data = {
    chartData: res,
  }

  return <TemplateSelector data={data} />
}

export default Page
