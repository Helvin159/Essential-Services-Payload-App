// lib/payload-init.ts
import payload from 'payload'

const startPayload = async () => {
  await payload.init({
    mongoURL: process.env.NEXT_PUBLIC_REACT_APP_DATABASE_URI,
    secretKey: process.env.NEXT_PUBLIC_REACT_APP_PAYLOAD_SECRET,
    express: require('express')(), // Initialize with an Express app
  })
}

export default startPayload
