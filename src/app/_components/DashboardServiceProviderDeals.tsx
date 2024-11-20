'use client'
import React from 'react'
import { useAuthContext } from '@/app/_context/AuthContext'

const DashboardServiceProviderDeals = () => {
  const { userCtx, deals, loading } = useAuthContext()
  console.log(userCtx)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    deals?.map && (
      <div id="service-provider-deals">
        <div className="service-provider-deals">
          <h3>Current & Upcoming Deals</h3>
        </div>
        <ul>
          {!loading &&
            deals.map((i: any, k: number) => {
              if (
                i?.assignedTo?.id === userCtx?.id &&
                (i.dealStage !== 'closed_won' || i.dealStage !== 'closed_lost')
              )
                return (
                  <li key={k}>
                    <div>
                      <h4>{i?.lead && i.lead?.fullName}</h4>
                      <p className="sales-stage">Prospecting</p>
                    </div>
                    <div>
                      <p className="m-0">{formatter.format(i.value)}</p>
                    </div>
                  </li>
                )
            })}
        </ul>
      </div>
    )
  )
}

export default DashboardServiceProviderDeals
