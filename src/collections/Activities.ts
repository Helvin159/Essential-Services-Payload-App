import type { CollectionConfig } from 'payload'

const Activities: CollectionConfig = {
  slug: 'activities',
  fields: [
    {
      name: 'activityType',
      type: 'select',
      options: [
        { label: 'Call', value: 'call' },
        { label: 'Email', value: 'email' },
        { label: 'Meeting', value: 'meeting' },
        // Add other activity types as needed
      ],
      required: true,
    },
    {
      name: 'dateTime',
      type: 'date',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'contact',
      type: 'relationship',
      relationTo: 'contacts',
      required: true,
    },
    {
      name: 'deal',
      type: 'relationship',
      relationTo: 'deals',
      required: true,
    },
  ],
}

export default Activities
