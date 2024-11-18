import type { CollectionConfig } from 'payload'

const SalesPipeline: CollectionConfig = {
  slug: 'sales-pipeline',
  labels: {
    singular: 'Sales Pipeline',
    plural: 'Sales Pipelines',
  },
  admin: {
    useAsTitle: 'dealName',
    defaultColumns: ['dealName', 'stage', 'assignedTo', 'expectedCloseDate', 'value'],
  },
  fields: [
    {
      name: 'dealName',
      type: 'text',
      label: 'Deal Name',
      required: true,
    },
    {
      name: 'stage',
      type: 'select',
      label: 'Stage',
      options: [
        { label: 'Prospecting', value: 'prospecting' },
        { label: 'Qualification', value: 'qualification' },
        { label: 'Needs Analysis', value: 'needs_analysis' },
        { label: 'Proposal', value: 'proposal' },
        { label: 'Negotiation', value: 'negotiation' },
        { label: 'Closed Won', value: 'closed_won' },
        { label: 'Closed Lost', value: 'closed_lost' },
      ],
      required: true,
      defaultValue: 'prospecting',
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      label: 'Assigned To',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'lead',
      type: 'relationship',
      label: 'Lead',
      relationTo: 'contacts',
      required: true,
    },
    {
      name: 'expectedCloseDate',
      type: 'date',
      label: 'Expected Close Date',
      required: true,
    },
    {
      name: 'value',
      type: 'number',
      label: 'Deal Value',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'notes',
      type: 'array',
      label: 'Notes',
      fields: [
        {
          name: 'note',
          type: 'textarea',
          label: 'Note',
          required: true,
        },
        {
          name: 'date',
          type: 'date',
          label: 'Date',
          required: true,
          defaultValue: () => new Date().toISOString(),
        },
      ],
    },
  ],
}

export default SalesPipeline
