'use client'
import { useAuthContext } from '@/app/_context/AuthContext'
import React from 'react'

const ClientDashboardTemplate = () => {
  const { userCtx } = useAuthContext()

  return (
    <>
      <section>
        <h1>Hi! {userCtx?.user.fullName}</h1>
        <p>Dashboard page</p>
      </section>
    </>
  )
}

export default ClientDashboardTemplate
