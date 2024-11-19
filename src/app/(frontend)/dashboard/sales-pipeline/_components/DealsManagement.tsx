'use client'
import React, { useEffect } from 'react'
import { useAuthContext } from '@/app/_context/AuthContext'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

const DealsManagement = ({ deals }: any) => {
  const { userCtx } = useAuthContext()

  const id = 'accordion'
  UIkit.use(Icons)
  UIkit.accordion(id)

  console.log(deals)
  useEffect(() => {})

  return (
    <div>
      <ul id={id}>
        {deals.map((i: any, k: number) => {
          if (i.assignedTo.id === userCtx.id) return <li>{i.dealName}</li>
        })}
      </ul>
    </div>
  )
}

export default DealsManagement
