'use client'
import React from 'react'
import ClientDashboardTemplate from '@/app/_components/ClientDashboardTemplate/ClientDashboardTemplate'
import { useAuthContext } from '@/app/_context/AuthContext'
import ServiceProviderDashboard from '@/app/_components/ServiceProviderDashboard/ServiceProviderDashboard'

const Page = () => {
  const { userCtx } = useAuthContext()

  switch (userCtx?.role) {
    case 'service-provider':
      return <ServiceProviderDashboard />
    case 'client':
      return <ClientDashboardTemplate />
    default:
      return <ServiceProviderDashboard />
  }
}

export default Page