import type { CollectionConfig } from 'payload'

const InterestRateHistory: CollectionConfig = {
  slug: 'interest-rate-history',
  fields: [
    {
      name: 'loanType',
      type: 'select',
      options: [
        { label: 'Purchase Loan', value: 'purchase' },
        { label: 'Refinance Loan', value: 'refinance' },
        // Add other loan types as needed
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
      name: 'apr',
      type: 'number',
      required: false,
      label: 'Annual Percentage Rate (APR)',
    },
  ],
}

export default InterestRateHistory
