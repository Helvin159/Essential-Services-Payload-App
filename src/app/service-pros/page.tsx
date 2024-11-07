import React from 'react'
import Card from './_components/Card'

import './_assets/styles.css'

interface User {
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  cell: string
  location: {
    state: string
    postcode: string | number
    country: string
  }
  picture: {
    medium: string
  }
  registered: {
    date: string
  }
}

interface UserData {
  results: User[]
}

export default async function Page() {
  const res = await fetch('https://randomuser.me/api/?results=12')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: UserData = await res.json()

  return (
    <>
      <section className="header">
        <h1>Find Trusted Service Professionals: Handymen, Maintenance Experts, and More</h1>
      </section>
      <section>
        <div className="pros-wrapper">
          {data.results.map((i: User, k: number) => (
            <Card user={i} key={k} />
          ))}
        </div>
      </section>
    </>
  )
}
