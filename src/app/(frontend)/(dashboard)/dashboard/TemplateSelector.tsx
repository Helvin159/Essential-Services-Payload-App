'use client'
import React from 'react'
import ClientDashboardTemplate from '@/app/_templates/ClientDashboardTemplate/ClientDashboardTemplate'
import { useAuthContext } from '@/app/_context/AuthContext'
import ServiceProviderDashboard from '@/app/_templates/ServiceProviderDashboard/ServiceProviderDashboard'

const TemplateSelector = ({ data }: any) => {
  const { userCtx } = useAuthContext()

  console.log(userCtx)

  switch (userCtx?.role) {
    case 'service-provider':
      return <ServiceProviderDashboard data={data} />
    case 'client':
      return <ClientDashboardTemplate />
    default:
      return <ServiceProviderDashboard />
  }
}

export default TemplateSelector
