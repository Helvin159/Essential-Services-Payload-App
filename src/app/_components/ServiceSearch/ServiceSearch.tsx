'use client'
import React, { useState } from 'react'
import { User } from 'payload'
import ServiceProviderCard from '../ServiceProviderCard/ServiceProviderCard'

const ServiceSearch = () => {
  const [searchVal, setSearchVal] = useState<String>('')
  const [users, setUsers] = useState<any>(null)

  const handleSearch = async (e: any) => {
    try {
      const results = await fetch('/api/find-by-service-offered', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchVal }),
      })
      const data: User[] = await results.json()

      setUsers(data)
      console.log(users)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <div className="service-search">
        <label htmlFor="search-bar">Search</label>
        <input
          id="search-bar"
          type="text"
          placeholder="Start your search for the hero you need..."
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="service-search-results">
        {users?.map((i: User, k: number) => {
          return (
            <>
              <ServiceProviderCard user={i} />
            </>
          )
        })}
      </div>
    </>
  )
}

export default ServiceSearch