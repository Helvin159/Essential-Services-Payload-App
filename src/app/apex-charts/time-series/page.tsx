import React, { Fragment } from 'react'
import TimeSeriesChart from './_components/TimeSeriesChart'

import './page.css'

const page = () => {
  return (
    <Fragment>
      <section>
        <h1>Time Series Chart</h1>
      </section>
      <section>
        <TimeSeriesChart />
      </section>
    </Fragment>
  )
}

export default page
