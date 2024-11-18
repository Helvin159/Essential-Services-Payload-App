'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const TimeSeriesChart = dynamic(() => import('./TimeSeriesChart'), {
  ssr: false,
})

const TimeSeriesContainer = ({ data }: any) => {
  return (
    <div>
      <TimeSeriesChart data={data} />
    </div>
  )
}

export default TimeSeriesContainer
