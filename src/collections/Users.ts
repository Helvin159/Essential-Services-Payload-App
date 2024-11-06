import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  // admin: {
  //   useAsTitle: 'email',
  // },
  auth: true,
  access: {
    read: ({ req: { user } }) => Boolean(user), // Allow read access for authenticated users
    create: () => true, // Allow anyone to create a user
    update: ({ req: { user } }) => Boolean(user), // Allow update access for authenticated users
    delete: ({ req: { user } }) => Boolean(user), // Allow delete access for authenticated users
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'firstName',
      type: 'text', // Specifies a single-line text input
      required: true, // Marks this field as required
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select', // Drop-down selection
      options: [
        {
          label: 'Contractor',
          value: 'user',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
      defaultValue: 'user', // Sets the default role to "User"
      required: true,
    },
    {
      name: 'dateOfBirth',
      type: 'date', // Date picker for selecting birth date
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayOnly', // Shows only day, month, and year
        },
      },
    },
    {
      name: 'profilePicture',
      type: 'upload', // File upload field for profile pictures
      relationTo: 'media', // Links to a 'media' collection for storing images
      required: false,
    },
    {
      name: 'bio',
      type: 'textarea', // Multi-line text area for user bio
      required: false,
      admin: {
        description: 'A short biography about the user.',
      },
    },
  ],
}
