import React from 'react'
import DashboardFirstGlanceStats from '../../_components/DashboardFirstGlanceStats'
import DashboardHeader from '../../_components/DashboardHeader'
import DashboardGraphAndConversionContainer from '../../_components/DashboardGraphAndConversionContainer'
import DashboardServiceProviderDeals from '../../_components/DashboardServiceProviderDeals'

const ServiceProviderDashboard = ({ data }: any) => {
  return (
    <div className="service-provider-dashboard">
      <DashboardHeader />
      <DashboardFirstGlanceStats />

      {/* Graph and Prospects */}
      <section className="service-provider-dashboard__graph-deals">
        <div className="service-provider-dashboard__graph-deals__col one">
          <DashboardGraphAndConversionContainer data={data} />
        </div>
        <div className="service-provider-dashboard__graph-deals__col two">
          <DashboardServiceProviderDeals />
        </div>
      </section>

      {/* Membership & Products */}
      <section className="service-provider-dashboard__graph-deals">
        <div className="service-provider-dashboard__graph-deals__col two">
          <DashboardServiceProviderDeals />
        </div>
        <div className="service-provider-dashboard__graph-deals__col one">
          <DashboardGraphAndConversionContainer data={data} />
        </div>
      </section>
    </div>
  )
}

export default ServiceProviderDashboard
