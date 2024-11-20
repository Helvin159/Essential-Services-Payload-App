'use client'
import React, { useEffect, useRef } from 'react'
import { useAuthContext } from '@/app/_context/AuthContext'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'

const DealsManagement = () => {
  const { userCtx, deals, loading } = useAuthContext()
  const accordionRef = useRef(null)

  const id = 'deal-management-accordion'
  const options = {
    animation: true,
    collapsible: false,
    duration: 150,
    transition: 'ease',
  }

  useEffect(() => {
    UIkit.use(Icons)
    if (accordionRef.current) {
      UIkit.accordion(accordionRef.current, options)
    }
  }, [userCtx, deals])

  const handleClick = (e: any) => console.log(e)
  deals && console.log(deals)

  return (
    deals?.map && (
      <>
        <ul id={id} ref={accordionRef}>
          {!loading &&
            deals.map((i: any, k: number) => {
              const date = new Date(i.expectedCloseDate)
              if (i?.assignedTo?.id === userCtx?.id)
                return (
                  <li key={k} className="text-left">
                    <div>{i.dealName}</div>
                    <div>
                      <div>
                        {i?.lead && <p className="m-0">Client: {i.lead?.fullName}</p>}
                        <p className="m-0">Deal value: {i.value}</p>
                        <select
                          name="stage"
                          defaultValue={'prospecting'}
                          id="sales-stage"
                          title={i.stage.toUpperCase()}
                        >
                          <option value={'prospecting'} defaultChecked>
                            Prospecting
                          </option>
                          <option>Proposal</option>
                        </select>
                        <br />
                        <button onClick={handleClick}>View</button>
                      </div>
                    </div>
                  </li>
                )
            })}
        </ul>
      </>
    )
  )
}

export default DealsManagement
