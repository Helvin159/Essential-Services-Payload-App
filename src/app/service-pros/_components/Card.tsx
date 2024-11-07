import Image from 'next/image'
import React from 'react'
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

interface CardProps {
  user: User
}

const Card: React.FC<CardProps> = ({ user }) => {
  const day = new Date(user.registered.date).getDate()
  const year = new Date(user.registered.date).getFullYear()
  const month = new Date(user.registered.date).getMonth()

  return (
    <div>
      <Image src={user.picture.medium} width={300} height={300} alt={user.name.first} />
      <h2>
        {user.name.first} {user.name.last}
      </h2>
      <p>
        {user.email}
        <br />
        {user.cell}, {user.email}
        <br />
        Member since {month}/{day}/{year}
        <br />
        {user.location.state}, {user.location.postcode}
        <br />
        {user.location.country}
      </p>
    </div>
  )
}

export default Card
