import { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
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
