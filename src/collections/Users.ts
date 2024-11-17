import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'role', 'servicesOffered'],
  },
  fields: [
    {
      name: 'role',
      label: 'Role',
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
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featuredImageUrl',
      label: 'Featured Image Url',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      required: true,
    },

    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
    },
    {
      name: 'biography',
      label: 'Biography',
      type: 'richText',
      required: false,
      editor: lexicalEditor(),
    },
    {
      name: 'bookings',
      label: 'Bookings',
      type: 'relationship',
      relationTo: 'bookings',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'servicesOffered',
      label: 'Offered Services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      admin: {
        condition: (data) => data.role === 'service-provider',
        position: 'sidebar',
      },
    },
    {
      name: 'reviews',
      label: 'Reviews',
      type: 'relationship',
      relationTo: 'reviews', // Assuming 'reviews' is the slug for your reviews collection
      hasMany: true, // Allows multiple reviews to be related to each user
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
