'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const GraphAndConversion = dynamic(() => import('./GraphAndConversion'), {
  ssr: false,
})

const GraphAndConversionContainer = () => {
  return <GraphAndConversion />
}

export default GraphAndConversionContainer
