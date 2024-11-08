'use client'
import payload from 'payload'
import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

const TimeSeriesChart = dynamic(() => import('./_components/TimeSeriesChart'), {
  ssr: false,
})
import './page.css'
import { createUser } from '@/app/_utils/utils'

const page = () => {
  return (
    <Fragment>
      <section>
        <h1>Time Series Chart</h1>
      </section>
      <section>
        <TimeSeriesChart />
      </section>
      <button onClick={() => createUser('helvin', 'helvin@g.com', 'password10', 'client')}>
        Click for test
      </button>
    </Fragment>
  )
}

export default page
