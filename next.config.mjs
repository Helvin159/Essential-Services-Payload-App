import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'needaservice.mrrymer.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  stats: {
    warningsFilter: /No serializer registered for Warning/,
  },
}

export default withPayload(nextConfig)
