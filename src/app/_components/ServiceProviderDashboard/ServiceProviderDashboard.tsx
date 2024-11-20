import React from 'react'
import FirstGlanceStats from './_components/FirstGlanceStats'
import DashboardHeader from './_components/DashboardHeader'
import GraphAndConversionContainer from './_components/GraphAndConversionContainer'

const ServiceProviderDashboard = ({ data }: any) => {
  return (
    <div className="service-provider-dashboard">
      <DashboardHeader />
      <FirstGlanceStats />
      <div>
        <GraphAndConversionContainer data={data} />
      </div>
    </div>
  )
}

export default ServiceProviderDashboard
