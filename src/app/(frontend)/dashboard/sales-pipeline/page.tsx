import React from 'react'
import DealsManagement from './_components/DealsManagement'
import { getPayload } from 'payload'
import config from '@payload-config'

const Page = async () => {
  const payload = await getPayload({ config })

  const res = await payload
    .find({
      collection: 'sales-pipeline',
    })
    .then((data) => data.docs)

  return (
    <>
      <section>
        <h1>Sales Breakdown</h1>
      </section>
      <section>
        <DealsManagement deals={res} />
      </section>
    </>
  )
}

export default Page
