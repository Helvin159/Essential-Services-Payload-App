import React from 'react'
import Calendar from 'react-calendar'
import { Booking } from '@/payload-types'

const ServiceProviderCalendar = ({ bookings }: any) => {
  const bookedDates: any = []

  bookings.forEach((i: Booking) => bookedDates.push(`${new Date(i.bookingDate)}`))

  console.log(bookedDates)

  return <Calendar value={bookedDates} />
}

export default ServiceProviderCalendar
