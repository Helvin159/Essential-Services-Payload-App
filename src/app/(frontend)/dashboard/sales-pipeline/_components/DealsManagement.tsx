'use client'
import React, { useEffect } from 'react'
import { useAuthContext } from '@/app/_context/AuthContext'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

const DealsManagement = ({ deals }: any) => {
  const { userCtx, loading } = useAuthContext()

  const id = 'accordion'
  const options = {
    animation: true,
    collapsible: false,
    duration: 150,
    transition: 'ease-in',
  }

  UIkit.use(Icons)
  UIkit.accordion(`#${id}`, options)

  console.log(deals)
  useEffect(() => {}, [userCtx, deals])

  return (
    <div>
      <ul id={id}>
        {!loading &&
          deals.map((i: any, k: number) => {
            if (i?.assignedTo?.id === userCtx?.id) return <li key={k}>{i.dealName}</li>
          })}
      </ul>
    </div>
  )
}

export default DealsManagement
