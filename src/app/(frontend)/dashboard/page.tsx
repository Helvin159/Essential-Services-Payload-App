'use client'
import React from 'react'
import ClientDashboardTemplate from '@/app/_components/ClientDashboardTemplate/ClientDashboardTemplate'
import { useAuthContext } from '@/app/_context/AuthContext'

const Page = () => {
  const { userCtx } = useAuthContext()

  switch (userCtx?.role) {
    case 'client':
      return <ClientDashboardTemplate />
    default:
      return <ClientDashboardTemplate />
  }
}

export default Page
