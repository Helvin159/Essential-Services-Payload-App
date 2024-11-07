import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section>
        <h1>Charts</h1>
      </section>
      <section>
        <h2>Options:</h2>
        <ul>
          <li>
            <Link href={'/charts/time-series'}>Apex Charts JS Time Series</Link>
          </li>
          <li>
            <Link href={'/charts/chartjs-line-chart'}>ChartJs Line Chart</Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default page
