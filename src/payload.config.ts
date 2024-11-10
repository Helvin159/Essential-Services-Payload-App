import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Categories } from './collections/Categories'
import { Bookings } from './collections/Bookings'
import { Messages } from './collections/Messages'
import { Reviews } from './collections/Reviews'
import { Admins } from './collections/Admins'
import { Pages } from './collections/Pages'
import { Tags } from './collections/Tags'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const serverUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_REACT_APP_LOCAL_SERVER_URL
    : process.env.NEXT_PUBLIC_REACT_APP_NETLIFY_SERVER_URL
export default buildConfig({
  serverURL: serverUrl,
  admin: {
    user: Admins.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  csrf: [`${process.env.NEXT_PUBLIC_REACT_APP_LOCAL_SERVER_URL}`].filter(Boolean),
  cors: [`${process.env.NEXT_PUBLIC_REACT_APP_LOCAL_SERVER_URL}`].filter(Boolean),
  collections: [
    Users,
    Bookings,
    Messages,
    Categories,
    Services,
    Pages,
    Reviews,
    Tags,
    Media,
    Admins,
  ],
  editor: lexicalEditor(),
  secret: process.env.NEXT_PUBLIC_REACT_APP_PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.NEXT_PUBLIC_REACT_APP_DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
