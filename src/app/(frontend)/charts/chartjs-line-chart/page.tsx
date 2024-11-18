import React, { Fragment } from 'react'
import LineChart from './_components/LineChart'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

const page = async () => {
  const payload = await getPayloadHMR({ config })

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

export default page
