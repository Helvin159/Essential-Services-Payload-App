import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'categoryName',
    defaultColumns: ['categoryName', 'slug', 'description'],
  },
  fields: [
    {
      name: 'categoryName',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
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
}
