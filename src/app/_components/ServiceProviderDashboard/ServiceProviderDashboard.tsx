import React from 'react'
import FirstGlanceStats from './_components/FirstGlanceStats'
import DashboardHeader from './_components/DashboardHeader'
import GraphAndConversionContainer from './_components/GraphAndConversionContainer'
import { getPayload } from 'payload'
import config from '@payload-config'

const ServiceProviderDashboard = () => {
  return (
    <div className="service-provider-dashboard">
      <DashboardHeader />
      <FirstGlanceStats />
      <GraphAndConversionContainer />
    </div>
  )
}

export default ServiceProviderDashboard
