import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { s3Storage } from '@payloadcms/storage-s3'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'

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
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import InterestRateHistory from './collections/InterestRateHistory'
import SalesPipeline from './collections/SalesPipeline'
import Contacts from './collections/Contacts'
import Deals from './collections/Deals'
import Activities from './collections/Activities'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const serverUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_REACT_APP_LOCAL_SERVER_URL
    : process.env.NEXT_PUBLIC_REACT_APP_NETLIFY_SERVER_URL

const transportOptions: SMTPTransport.Options = {
  host: process.env.NEXT_PUBLIC_REACT_APP_SMTP_HOST,
  port: Number(process.env.NEXT_PUBLIC_REACT_APP_SMTP_PORT),
  auth: {
    user: process.env.NEXT_PUBLIC_REACT_APP_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_REACT_APP_SMTP_PASS,
  },
}

export default buildConfig({
  serverURL: serverUrl,
  admin: {
    user: Admins.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  email: nodemailerAdapter({
    defaultFromAddress: 'helvin159@gmail.com',
    defaultFromName: 'Helvin',
    transport: nodemailer.createTransport(transportOptions),
  }),
  csrf: [`${process.env.NEXT_PUBLIC_REACT_APP_LOCAL_SERVER_URL}`].filter(Boolean),
  cors: [`${process.env.NEXT_PUBLIC_REACT_APP_LOCAL_SERVER_URL}`].filter(Boolean),
  collections: [
    Users,
    Bookings,
    SalesPipeline,
    Deals,
    Contacts,
    Messages,
    Activities,
    InterestRateHistory,
    Categories,
    Services,
    Pages,
    Reviews,
    Tags,
    Media,
    Admins,
  ],
  // editor: lexicalEditor(),
  secret: process.env.NEXT_PUBLIC_REACT_APP_PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.NEXT_PUBLIC_REACT_APP_DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        [Media.slug]: true,
      },
      bucket: process.env.NEXT_PUBLIC_REACT_APP_AWS_S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.NEXT_PUBLIC_REACT_APP_AWS_S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.NEXT_PUBLIC_REACT_APP_AWS_S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.NEXT_PUBLIC_REACT_APP_AWS_S3_REGION,
        // ... Other S3 configuration
      },
    }),
  ],
})
