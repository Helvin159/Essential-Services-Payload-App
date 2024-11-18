import type { CollectionConfig } from 'payload'

const InterestRateHistory: CollectionConfig = {
  slug: 'interest-rate-history',
  admin: {
    defaultColumns: ['loanType', 'loanTerm', 'creditScoreRange'],
  },
  fields: [
    {
      name: 'loanType',
      type: 'select',
      options: [
        { label: 'Purchase Loan', value: 'purchase' },
        { label: 'Cash-Out Refinance', value: 'refinance' },
        { label: 'Jumbo Purchase', value: 'jumbo-purchase' },
        { label: 'VA Rate Reduction', value: 'jumbo-purchase' },
      ],
      required: true,
    },
    {
      name: 'creditScoreRange',
      type: 'select',
      options: [
        { label: '720+', value: '720' },
        { label: '660 - 719', value: '660-619' },
      ],
      required: true,
    },
    {
      name: 'loanTerm',
      type: 'select',
      required: true,
      options: [
        { label: '15 Year', value: 'fifteenYear' },
        { label: '30 Year', value: 'thirtyYear' },
      ],
    },
    {
      name: 'interestRateData',
      type: 'array',
      fields: [
        {
          name: 'date',
          type: 'date',
          required: true,
        },
        {
          name: 'interestRate',
          type: 'number',
          required: true,
        },
      ],
      required: true,
    },
  ],
}

export default InterestRateHistory
