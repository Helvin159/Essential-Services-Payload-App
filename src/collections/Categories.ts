import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'categoryName',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
