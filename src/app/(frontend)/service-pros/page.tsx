import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Card from './_components/Card'
import { createRandomUsers } from '@/app/_utils/utils'

export default async function Page() {
  const payload = await getPayloadHMR({ config })

  const result = await payload
    .find({
      collection: 'users',
      limit: 0,
      sort: 'fullName',
      where: {
        servicesOffered: {
          exists: true,
        },
      },
    })
    .then((data) => data.docs)

  return (
    <>
      <section className="header">
        <h1>Find Trusted Service Professionals: Handymen, Maintenance Experts, and More</h1>
      </section>
      <section>
        <div className="pros-wrapper">
          {result.map((i, k) => {
            return <Card user={i} key={k} />
          })}
        </div>
      </section>
    </>
  )
}
