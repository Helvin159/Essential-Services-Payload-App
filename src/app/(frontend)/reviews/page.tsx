import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import React from 'react'
import { Review } from '@/payload-types'
import Link from 'next/link'
import ReviewStars from './_components/ReviewStars'

const page = async () => {
  const payload = await getPayloadHMR({ config })
  const results = await payload
    .find({
      collection: 'reviews',
      page: 1,
      limit: 9,
    })
    .then((data) => data.docs)
  console.log(results)

  return (
    <>
      <section>
        <h1>Our Reviews</h1>

        {results.map((i: any, k: number) => (
          <div key={k}>
            <h3>{i.serviceProvider.fullName}</h3>
            <ReviewStars rating={i.rating} />
            <p>Reviewed by {i.client.fullName}</p>
            <Link href={`/reviews/${i.slug}`}>View full review</Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default page
