// app/api/custom-endpoint/route.ts
import { NextResponse } from 'next/server'
import payload from 'payload'

export async function GET() {
  try {
    const data = await payload.find({
      collection: 'users', // Replace with your collection slug
      limit: 10, // Adjust the limit as needed
    })

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Error fetching data:', error)
    return NextResponse.json({ message: 'Failed to fetch data' }, { status: 500 })
  }
}
