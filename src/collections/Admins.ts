import type { CollectionConfig } from 'payload'

export const Admins: CollectionConfig = {
  slug: 'admins',
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'firstName',
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
  ],
}
