import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'publishDate'],
  },
  access: {
    update: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
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
    {
      name: 'content',
      type: 'richText',
      required: false,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'admins', // Ensure 'admins' collection exists
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishDate',
      type: 'date',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
      defaultValue: 'draft',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media', // Ensure 'media' collection exists
    },
    {
      name: 'metaDescription',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags', // Ensure 'tags' collection exists
      hasMany: true,
    },
    {
      name: 'parentPage',
      type: 'relationship',
      relationTo: 'pages',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'template',
      type: 'select',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Landing Page',
          value: 'landing',
        },
        {
          label: 'Blog Post',
          value: 'blog',
        },
      ],
      defaultValue: 'default',
    },
    {
      name: 'redirectURL',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'customCSS',
      type: 'code',
      admin: {
        language: 'css',
      },
    },
    {
      name: 'customJavaScript',
      type: 'code',
      admin: {
        language: 'javascript',
      },
    },
  ],
}
