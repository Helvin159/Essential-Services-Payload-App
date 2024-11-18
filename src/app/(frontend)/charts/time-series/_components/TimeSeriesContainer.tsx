'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const TimeSeriesChart = dynamic(() => import('./TimeSeriesChart'), {
  ssr: false,
})

const TimeSeriesContainer = ({ loanTypeFields, data }: any) => {
  return (
    <>
      <TimeSeriesChart loanTypeFields={loanTypeFields} data={data} />
    </>
  )
}

export default TimeSeriesContainer
