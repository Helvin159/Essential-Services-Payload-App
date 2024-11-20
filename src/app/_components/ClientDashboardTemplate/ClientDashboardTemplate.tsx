'use client'
import { useAuthContext } from '@/app/_context/AuthContext'
import Link from 'next/link'
import React from 'react'

const ClientDashboardTemplate = () => {
  const { userCtx } = useAuthContext()

  return (
    <>
      <section>
        <h1>Hi! {userCtx?.fullName}</h1>
        <Link href={'/dashboard/sales-pipeline'}>Sales Pipeline</Link>
        <p>Dashboard page</p>
      </section>
    </>
  )
}

export default ClientDashboardTemplate
