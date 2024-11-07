import type { CollectionConfig } from 'payload'

export const AdminMessages: CollectionConfig = {
  slug: 'admin-messages',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
}
