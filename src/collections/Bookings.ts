import { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  fields: [
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'serviceProvider',
      type: 'relationship',
      relationTo: 'users',
      required: true,
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
}
