import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Client', value: 'client' },
        { label: 'Service Provider', value: 'service-provider' },
        { label: 'Administrator', value: 'admin' },
      ],
      defaultValue: 'client',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'password',
      type: 'text',
      required: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'servicesOffered',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      admin: {
        condition: (data) => data.role === 'service-provider',
      },
    },
  ],
}
