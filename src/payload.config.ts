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

export default buildConfig({
  serverURL: 'localhost:3000',
  admin: {
    user: 'admins',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  csrf: ['http://localhost:3000'],
  cors: ['http://localhost:3000'],
  collections: [
    Users,
    Bookings,
    Messages,
    Services,
    Pages,
    Reviews,
    Categories,
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
