import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <h1>Apex Charts</h1>
      <div>
        <ul>
          <li>
            <Link href={'/apex-charts/time-series'}>Time Series</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default page
