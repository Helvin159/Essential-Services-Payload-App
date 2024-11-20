'use client'
import React from 'react'

const ContactProvider = ({ user }: any) => {
  return (
    <div className="contact-provider">
      <button onClick={(e: any) => console.log(e)} uk-toggle="target:#contact-provider-modal">
        Contact {user.fullName}
      </button>
    </div>
  )
}

export default ContactProvider
