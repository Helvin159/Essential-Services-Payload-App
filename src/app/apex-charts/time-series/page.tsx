'use client'
import React, { Fragment } from 'react'

const TimeSeriesChart = dynamic(() => import('./_components/TimeSeriesChart'), {
  ssr: false,
})
import './page.css'
import dynamic from 'next/dynamic'

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