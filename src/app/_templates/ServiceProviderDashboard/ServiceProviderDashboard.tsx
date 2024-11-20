import React from 'react'
import DashboardFirstGlanceStats from '../../_components/DashboardFirstGlanceStats'
import DashboardHeader from '../../_components/DashboardHeader'
import DashboardGraphAndConversionContainer from '../../_components/DashboardGraphAndConversionContainer'
import DashboardServiceProviderDeals from '../../_components/DashboardServiceProviderDeals'
import DashboardServiceProviderProducts from '@/app/_components/DashboardServiceProviderProducts'

const ServiceProviderDashboard = ({ user, data }: any) => {
  console.log(user)
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
          <ul>
            <DashboardServiceProviderProducts services={user?.servicesOffered} />
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ServiceProviderDashboard
