'use client'
import { useAuthContext } from '@/app/_context/AuthContext'
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {
  const { login, loading } = useAuthContext()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <>
      <section>
        <h1>Log In</h1>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            placeholder="email"
            id="user-email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <label htmlFor="user-password">password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <input type="submit" value={'Submit'} disabled={loading} />
        </form>
      </section>
      <section>
        <Link href="/admin">Are you an Admin? If so, click here to log in!</Link>
      </section>
    </>
  )
}

export default Page
