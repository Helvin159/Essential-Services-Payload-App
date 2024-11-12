'use client'
import { createContext, useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { User } from 'payload'

const AuthContext = createContext<any | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const router = useRouter()

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
        setLoggedIn(true)
        router.push('/dashboard')
      } else {
        const errorData = await res.json()
        setLoggedIn(false)
        console.error('Login failed:', errorData)
      }
    } catch (error) {
      setLoggedIn(false)
      console.error('Login error:', error)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      setUser(null)
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/get-auth-cookies', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include cookies in the request
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to fetch user information.')
        }

        const data = await response.json()
        console.log(data)

        if (data.token.value) {
          setToken(data.token.value)
          setLoggedIn(true)
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchUser()
  }, [user?.token])

  const value = { userCtx: user, login, logout, loggedIn, loading, token }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
