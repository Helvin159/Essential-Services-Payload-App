import Link from 'next/link'
import { User } from 'payload'
import React from 'react'

const ServiceProviderCard = ({ user }: { user: User }) => {
  const memberSince = new Date(user.createdAt).toDateString()

  return (
    <Link href={`/service-provider/${user.slug}`} className="service-provider-card">
      <h3>{user.fullName}</h3>
      <p>{user.phoneNumber}</p>
      <p>Member since {memberSince}</p>
    </Link>
  )
}

export default ServiceProviderCard
