import React, { useEffect, useRef, useState } from 'react'
import ApexCharts from 'apexcharts'

const DashboardGraphAndConversion = ({ data }: any) => {
  const chartData = data?.chartData || null

  const chartRef = useRef<HTMLDivElement>(null)
  const apexChartRef = useRef<ApexCharts | null>(null)

  const [seriesData] = useState<{ x: number; y: number }[]>(
    (chartData?.length > 0 &&
      chartData[0]?.interestRateData?.map((i: any) => ({
        x: new Date(i.date).getTime(),
        y: i.interestRate,
      }))) ||
      [],
  )

  useEffect(() => {
    if (chartData) {
      const series = [
        {
          name: 'HRM',
          data: seriesData,
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

      apexChartRef.current = new ApexCharts(chartRef?.current, options)
      apexChartRef?.current?.render()

      return () => {
        if (apexChartRef.current) apexChartRef.current.destroy()
      }
    }
  }, [seriesData, chartData])

  return (
    chartData && (
      <div className="time-series-chart service-provider-dashboard__graph-conversion">
        <div className="time-series-chart__chart">
          <div ref={chartRef} />
        </div>
      </div>
    )
  )
}

export default DashboardGraphAndConversion
