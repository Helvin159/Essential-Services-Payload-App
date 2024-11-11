import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import type { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  admin: {
    useAsTitle: 'client',
    defaultColumns: ['client', 'serviceProvider', 'bookingDate', 'status'],
  },
  fields: [
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      filterOptions: {
        role: {
          equals: 'client',
        },
      },
    },
    {
      name: 'serviceProvider',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      filterOptions: {
        role: {
          equals: 'service-provider',
        },
      },
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      required: true,
    },
    {
      name: 'bookingDate',
      type: 'date',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'pending',
      required: true,
    },
    {
      name: 'notes',
      type: 'textarea',
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        const payload = await getPayloadHMR({ config })
        if (operation === 'create' && doc.serviceProvider) {
          try {
            // Retrieve the current bookings for the service provider
            const serviceProvider = await payload.findByID({
              collection: 'users',
              id: doc.serviceProvider,
            })

            // Initialize the bookings array if it doesn't exist
            const currentBookings = serviceProvider.bookings || []

            // Update the service provider's bookings array with the new booking ID
            await payload.update({
              collection: 'users',
              id: doc.serviceProvider,
              data: {
                bookings: [...currentBookings, doc.id], // Add the new booking ID
              },
            })
          } catch (error) {
            console.error('Error updating service provider bookings:', error)
          }
        }
      },
    ],
  },
}
