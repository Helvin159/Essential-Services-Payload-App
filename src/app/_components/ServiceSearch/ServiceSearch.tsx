'use client'
import React, { useState } from 'react'
import { User } from 'payload'
import ServiceProviderCard from '../ServiceProviderCard/ServiceProviderCard'

const ServiceSearch = () => {
  const [users, setUsers] = useState<Array<User> | null>(null)
  const [fetching, setFetching] = useState<Boolean>(false)

  const handleSearch = (e: any) => {
    // If input is empty, set users to null and return
    if (e.target.value === '') {
      setUsers(null)
      return
    }

    if (fetching === false) {
      // Set fetching to true
      setFetching(true)

      // Fetch
      setTimeout(async () => {
        try {
          const results = await fetch('/api/find-by-service-offered', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value: e.target.value }),
          })
          const data: User[] = await results.json()

          // Set Users
          setUsers(data)

          // Set fetching to false
          setFetching(false)
        } catch (e) {
          // Log Error message
          console.error(e)

          // Set fetching to false
          setFetching(false)
        }
      }, 100)
    }
  }

  return (
    <div className="service-search-wrapper">
      <div className="service-search">
        <label htmlFor="search-bar">Search</label>
        <input
          id="search-bar"
          type="text"
          placeholder="Start your search for the hero you need..."
          onKeyUp={handleSearch}
        />
      </div>
      <div className={`service-search-results ${users ? 'active' : 'inactive'}`}>
        {users !== undefined &&
          users?.map((i: User, k: number) => {
            return <ServiceProviderCard user={i} key={k} />
          })}
      </div>
    </div>
  )
}

export default ServiceSearch
