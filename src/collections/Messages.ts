import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'subject',
  },
  fields: [
    {
      name: 'sender',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'receiver',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'sentAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'read',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
