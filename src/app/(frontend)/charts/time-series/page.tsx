import React, { Fragment } from 'react'
// import TimeSeriesChart from './_components/TimeSeriesChart'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import TimeSeriesContainer from './_components/TimeSeriesContainer'

// @todo remove this later
// import { interestRateData, refiData } from '../../../_utils/interestRateData'

import './page.css'

const page = async () => {
  const payload = await getPayloadHMR({ config })

  const res = await payload
    .find({
      collection: 'interest-rate-history',
    })
    .then((data) => data.docs)

  // @todo remove this later
  // const updatedData = refiData.map((item) => ({
  //   date: item.x,
  //   interestRate: item.y,
  // }))

  // @todo remove this later
  // Create Interest Rate Data Points
  // await payload.create({
  //   collection: 'interest-rate-history',
  //   data: {
  //     loanType: 'refinance',
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
