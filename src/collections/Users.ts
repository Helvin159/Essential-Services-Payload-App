import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
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
          label: 'User',
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
