import type { CollectionConfig } from 'payload'

export const Admins: CollectionConfig = {
  slug: 'admins',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['fullName', 'email', 'role', 'address'],
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [{ label: 'Administrator', value: 'admin' }],
      defaultValue: 'admin',
      required: true,
    },
    {
      name: 'firstName',
      type: 'text',
      required: false,
    },
    {
      name: 'lastName',
      type: 'text',
      required: false,
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
      name: 'slug',
      type: 'text',
      unique: true,
      required: true, // Set to true if slug is mandatory
      admin: {
        position: 'sidebar',
      },
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
