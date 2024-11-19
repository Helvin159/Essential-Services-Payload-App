import React, { Fragment } from 'react'
import LineChart from './_components/LineChart'
import { getPayload } from 'payload'
import config from '@payload-config'

const Page = async () => {
  const payload = await getPayload({ config })

  const res = await payload.find({
    collection: 'interest-rate-history',
  })

  return (
    <Fragment>
      <section>
        <h1>ChartJs Line Chart</h1>
      </section>
      <section>
        <LineChart />
      </section>
    </Fragment>
  )
}

export default Page
