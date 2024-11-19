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
  const [deals, setDeals] = useState<any>(null)
  const router = useRouter()

  const login = async (email: string, password: string) => {
    // Set Loading to true
    setLoading(true)

    // Try the API Route to log in
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      // Check if response is ok
      // If ok, setUser to response data
      // Save necessary info in localStorage.
      if (res.ok) {
        const data = await res.json()

        // Set user and loggedIn
        // Save user info to localStorage
        setUser(data.user)
        setLoggedIn(true)
        window.localStorage.setItem(
          process.env.NEXT_PUBLIC_REACT_APP_LOCAL_STORAGE_KEY || '',
          JSON.stringify(data.user),
        )

        // Send user to User Dashboard
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
      setLoggedIn(false)
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
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

        if (data.token.value) {
          setToken(data.token.value)
          setLoggedIn(true)
        }
      } catch (err) {
        console.log(err, 'no token at this time.')
      }
    }

    fetchUser()

    if (window.localStorage.homeHerosComUser) {
      const userData = JSON.parse(window.localStorage.homeHerosComUser)

      const getDeals = async () => {
        const response2 = await fetch('/api/find-sales-pipeline-by-assignment', {
          method: 'POST',

          body: JSON.stringify({ id: userData.user.id }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        console.log(response2)
      }

      getDeals()

      if (token) {
        setUser(userData.user)
        setTimeout(() => setLoading(false), 50)
      }
    } else {
      window.localStorage.removeItem(process.env.NEXT_PUBLIC_REACT_APP_LOCAL_STORAGE_KEY || '')
      setTimeout(() => setLoading(false), 50)
    }
  }, [user?.token, token])

  const value = { userCtx: user, login, logout, loggedIn, loading, token }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
