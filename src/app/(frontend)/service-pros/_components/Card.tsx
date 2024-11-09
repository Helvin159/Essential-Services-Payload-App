import Image from 'next/image'
import React from 'react'

const Card = ({ user }: any) => {
  const day = new Date(user.createdAt).getDate()
  const year = new Date(user.createdAt).getFullYear()
  const month = new Date(user.createdAt).getMonth()

  return (
    <div>
      {/* <Image src={user.picture.medium} width={300} height={300} alt={user.name.first} /> */}
      <h2>{user.fullName}</h2>
      <p>
        {user.email}
        <br />
        {user.phoneNumber}
        <br />
        Member since {month}/{day}/{year}
        <br />
        {user.address}
      </p>
    </div>
  )
}

export default Card
