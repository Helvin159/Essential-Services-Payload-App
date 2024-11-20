'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const DashboardGraphAndConversion = dynamic(() => import('./DashboardGraphAndConversion'), {
  ssr: false,
})

const DashboardGraphAndConversionContainer = ({ data }: any) => {
  return <DashboardGraphAndConversion data={data} />
}

export default DashboardGraphAndConversionContainer
