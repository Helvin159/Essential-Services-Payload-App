import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import type { BasePayload } from 'payload'

const payload: BasePayload = await getPayloadHMR({ config })

export const createUser = async (fullName: string, email: string, role: string, slug: string) => {
  console.log('running createUser')

  await fetch('/api/create-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName: fullName,
      email: email,
      role: role,
      slug: slug,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        console.log('User created:', data.user)
      } else {
        console.error('Error:', data.error)
      }
    })
}

export const generateObjectId: () => string = (): string => {
  return (
    Math.floor(Date.now() / 1000).toString(16) +
    'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16)).toLowerCase()
  )
}

export const createRandomUsers = async () => {
  const generateObjectId: () => string = (): string => {
    return (
      Math.floor(Date.now() / 1000).toString(16) +
      'xxxxxxxxxxxxxxxx'
        .replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16))
        .toLowerCase()
    )
  }

  const { results } = await fetch('https://randomuser.me/api/?results=27')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error('Error fetching data:', error))

  results.forEach(async (i: any) => {
    const id: string = generateObjectId()

    await payload.create({
      collection: 'users',
      data: {
        id: id,
        fullName: `${i.name.first} ${i.name.last}`,
        password: 'password',
        role: 'service-provider',
        email: i.email,
        featuredImageUrl: i.picture.medium,
        phoneNumber: i.cell,
        slug: `${i.name.first.toLowerCase()}-${id}-${i.name.last.toLowerCase()}`,
      },
    })
  })
}

export const updateServiceProviderBooking = async () => {
  try {
    const serviceProvider = await payload.findByID({
      collection: 'users',
      id: '',
    })

    const currentBookings = serviceProvider.bookings || []

    await payload.update({
      collection: 'users',
      id: 'data.serviceProvider',
      data: {
        // bookings: [...currentBookings, data.id], // Add the new booking ID
      },
    })
  } catch (error) {
    console.error('Error updating service provider bookings:', error)
  }
}

export const setCookie = (email: string, value: string, days: number) => {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = `expires=${date.toUTCString()}`
  // document.cookie = `${email}=${encodeURIComponent(value)};${expires};path=/`
  let doc = `${email}=${encodeURIComponent(value)};${expires};path=/`
  return doc
}

export const getCookie = (email: string) => {
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookies = decodedCookie.split(';')
  const prefix = `${email}=`
  for (let cookie of cookies) {
    cookie = cookie.trim()
    if (cookie.startsWith(prefix)) {
      return cookie.substring(prefix.length)
    }
  }
  return null
}
