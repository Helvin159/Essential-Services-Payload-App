import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'publishDate'],
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
      required: false,
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
      relationTo: 'admins', // Ensure you have a 'users' collection
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
      relationTo: 'media', // Ensure you have a 'media' collection
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
      relationTo: 'tags', // Ensure you have a 'tags' collection
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
