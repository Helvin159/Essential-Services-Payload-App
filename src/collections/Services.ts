import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  fields: [
    {
      name: 'serviceName',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
  ],
}
