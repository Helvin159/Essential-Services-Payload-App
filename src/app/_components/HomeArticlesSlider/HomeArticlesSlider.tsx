import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import React from 'react'
import Link from 'next/link'

const HomeArticlesSlider = async () => {
  const payload = await getPayloadHMR({ config })
  const results = await payload
    .find({
      collection: 'pages',
      where: {
        template: {
          equals: 'article',
        },
      },
    })
    .then((data) => data.docs)

  console.log(results)

  return (
    <div className="home__articles">
      {results.map((i, k) => {
        return (
          <Link href={`/${i.slug}`} className="home__articles__card" key={k}>
            <div className="home__articles__card__header">
              <h1>{i.title}</h1>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default HomeArticlesSlider
