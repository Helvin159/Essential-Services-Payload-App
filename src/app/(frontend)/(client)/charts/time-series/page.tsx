import React, { Fragment } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import TimeSeriesContainer from './_components/TimeSeriesContainer'

const Page = async () => {
  const payload = await getPayload({ config })

  const res = await payload
    .find({
      collection: 'interest-rate-history',
    })
    .then((data) => data.docs)

  const interestRateHistory = await payload.collections['interest-rate-history']
  const loanTypeFields: any = interestRateHistory.config.fields.find(
    (i: any) => i.name === 'loanType',
  )

  return (
    <Fragment>
      <section>
        <h1>Time Series Chart</h1>
      </section>
      <section>
        <TimeSeriesContainer loanTypeFields={loanTypeFields?.options} data={res} />
      </section>
    </Fragment>
  )
}

export default Page
