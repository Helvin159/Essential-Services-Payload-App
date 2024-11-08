import React from 'react'
import payload from 'payload'
import Card from './_components/Card'
import type { User } from 'payload'

import './_assets/styles.css'
import { Users } from '@/collections/Users'

export default async function Page() {
  const res = await fetch('https://randomuser.me/api/?results=12')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: User = await res.json()

  await payload.create({
    collection: 'users',
    data: {
      fullName: 'Rosa Parks',
      password: 'password10',
      role: 'client',
      email: 'rosa@gmail.com',
    },
  })
  // payload.create({
  //   collection: 'messages',
  //   data: {
  //     sender: 'Rosa Parks',
  //     receiver: 'password10',
  //     content: 'client',
  //     sentAt: '10',
  //   },
  // })

  console.log(Users.slug)

  data.results.forEach((i: any) => {
    // payload.create({
    //   collection: 'users',
    //   data: {
    //     fullName: `${i.name.first} ${i.name.last}`,
    //     email: i.email,
    //     phoneNumber: i.cell,
    //     address: `${i.location.street.number} ${i.location.street.name}, ${i.location.city} ${i.location.state} ${i.location.postcode} `,
    //     role: 'service-provider',
    //     password: 'password10',
    //   },
    // })
  })

  return (
    <>
      <section className="header">
        <h1>Find Trusted Service Professionals: Handymen, Maintenance Experts, and More</h1>
      </section>
      <section>
        <div className="pros-wrapper">
          {/* {data.results.map((i: User, k: number) => ( */}
          {/* <Card user={i} key={k} /> */}
          {/* ))} */}
        </div>
      </section>
    </>
  )
}
