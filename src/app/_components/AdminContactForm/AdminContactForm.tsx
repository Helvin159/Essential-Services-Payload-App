'use client'
import React, { useState } from 'react'

const AdminContactForm = () => {
  const [name, setName] = useState<String | null>(null)
  const [subject, setSubject] = useState<String | null>(null)
  const [message, setMessage] = useState<String | null>(null)
  const [status, setStatus] = useState<String | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending message...')

    const res = await fetch('/contact-admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, subject, message }),
    })

    if (res.ok) {
      setName(null)
      setSubject(null)
      setMessage(null)
      setStatus(null)
    } else {
      setStatus('Message failed')
    }
  }

  return (
    <>
      <form>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" type="text" onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <label htmlFor="contact-message">Message</label>
        <input
          id="contact-message"
          type="textarea"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <p>{status}</p>
    </>
  )
}

export default AdminContactForm
