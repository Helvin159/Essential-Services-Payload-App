import type { CollectionConfig } from 'payload'

const Deals: CollectionConfig = {
  slug: 'deals',
  fields: [
    {
      name: 'dealName',
      type: 'text',
      required: true,
    },
    {
      name: 'dealValue',
      type: 'number',
      required: true,
    },
    {
      name: 'dealStage',
      type: 'select',
      options: [
        { label: 'Prospecting', value: 'prospecting' },
        { label: 'Qualification', value: 'qualification' },
        { label: 'Proposal', value: 'proposal' },
        { label: 'Negotiation', value: 'negotiation' },
        { label: 'Closed Won', value: 'closed_won' },
        { label: 'Closed Lost', value: 'closed_lost' },
      ],
      required: true,
    },
    {
      name: 'lead',
      type: 'relationship',
      relationTo: 'contacts',
      required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
  ],
}

export default Deals
