import React, { Fragment } from 'react'
// import TimeSeriesChart from './_components/TimeSeriesChart'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

// @todo remove this later
// import { interestRateData } from '../../../_utils/interestRateData'

import './page.css'
import dynamic from 'next/dynamic'
import TimeSeriesContainer from './_components/TimeSeriesContainer'

const page = async () => {
  const payload = await getPayloadHMR({ config })

  const res = await payload
    .find({
      collection: 'interest-rate-history',
    })
    .then((data) => data.docs[0])

  // @todo remove this later
  // const updatedData = interestRateData.map((item) => ({
  //   date: item.x,
  //   interestRate: item.y,
  // }))

  // @todo remove this later
  // Create Interest Rate Data Points
  // await payload.create({
  //   collection: 'interest-rate-history',
  //   data: {
  //     loanType: 'purchase',
  //     creditScoreRange: '720',
  //     interestRateData: updatedData,
  //     loanTerm: 'thirtyYear',
  //     apr: 4.8,
  //   },
  // })

  return (
    <Fragment>
      <section>
        <h1>Time Series Chart</h1>
      </section>
      <section>
        <TimeSeriesContainer data={res} />
      </section>
    </Fragment>
  )
}

export default page
