'use client'
import React, { useEffect, useRef, useState } from 'react'
import ApexCharts from 'apexcharts'
import type { InterestRateHistory } from '@/payload-types'
// import { formatInterestRateData } from '@/app/_utils/utils'

const TimeSeriesChart = ({ data }: any) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const apexChartRef = useRef<ApexCharts | null>(null)
  const [seriesData, setSeriesData] = useState<{ x: number; y: number }[]>(
    data[0]?.interestRateData?.map((i: any) => ({
      x: new Date(i.date).getTime(),
      y: i.interestRate,
    })) || [],
  )
  const [chartData, setChartData] = useState<{ x: number; y: number }[]>(seriesData)
  const ref = data.find((i: InterestRateHistory) => i.loanType === 'purchase')
  console.log(ref)
  useEffect(() => {
    const series = [
      {
        name: 'HRM',
        data: chartData,
      },
    ]
    const options = {
      series,
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: false,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      // Line Color
      colors: ['#000'],
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: '6 Month VA Mortgage Indices',
        align: 'center',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return val.toFixed(3) + '%'
          },
        },
        title: {
          text: 'Rate',
        },
        lines: {
          show: false,
        },
      },
      xaxis: {
        type: 'datetime',
        lines: {
          show: true,
        },
      },
      tooltip: {
        shared: false,
        y: {
          forceNiceScale: true,
          formatter: function (val: number) {
            return val.toFixed(3)
          },
        },
      },
      stroke: {
        width: 2,
        curve: 'straight',
      },
    }

    apexChartRef.current = new ApexCharts(chartRef.current, options)
    apexChartRef.current.render()

    return () => {
      if (apexChartRef.current) apexChartRef.current.destroy()
    }
  }, [chartData])

  const updateChart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const val = Number((e.target as HTMLButtonElement).value)
    const arr = seriesData

    if (val === 3) {
      setChartData(arr.slice(0, arr.length / 2))
    } else if (val === 2) {
      setChartData(arr.slice(0, arr.length / 3))
    } else if (val === 6) {
      setChartData(seriesData)
    }
  }

  const updateLoanType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnVal = (e.target as HTMLButtonElement).value
    const selLoanType = data.find((i: InterestRateHistory) => i.loanType === btnVal)

    console.log(selLoanType)
    if (selLoanType) {
      // const formattedData = formatInterestRateData(selLoanType.interestRateData)
      const formattedData = selLoanType.interestRateData.map((i: any) => ({
        x: new Date(i.date).getTime(),
        y: i.interestRate,
      }))
      setSeriesData(formattedData)
      setChartData(formattedData)
    }
  }

  return (
    seriesData && (
      <>
        <div ref={chartRef} />
        <button value={2} onClick={updateChart}>
          2 months
        </button>
        <button value={3} onClick={updateChart}>
          3 months
        </button>
        <button value={6} onClick={updateChart}>
          6 months
        </button>

        <button value={'purchase'} onClick={updateLoanType}>
          Purchase
        </button>
        <button value={'refinance'} onClick={updateLoanType}>
          Refinance
        </button>
      </>
    )
  )
}

export default TimeSeriesChart
