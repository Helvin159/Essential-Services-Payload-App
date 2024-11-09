import { User } from 'payload'
import React from 'react'

const ServiceProviderCard = ({ user }: { user: User }) => {
  const memberSince = new Date(user.createdAt).toDateString()
  return (
    <div className="service-provider-card">
      <h3>{user.fullName}</h3>
      <a>{user.phoneNumber}</a>
      <p>Member since {memberSince}</p>
    </div>
  )
}

export default ServiceProviderCard
