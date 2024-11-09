'use client'
import React, { Fragment } from 'react'
import LineChart from './_components/LineChart'

// import './page.css'

const page = () => {
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
