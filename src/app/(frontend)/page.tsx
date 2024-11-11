import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import HomeArticlesSlider from '../_components/HomeArticlesSlider/HomeArticlesSlider'
import ServiceSearch from '../_components/ServiceSearch/ServiceSearch'
import { createRandomUsers } from '../_utils/utils'

export default async function Home() {
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

  return (
    <>
      <section>
        <div className="home-header">
          <h1>Find Trusted Service Professionals: Handymen, Maintenance Experts, and More!</h1>
        </div>
        <ServiceSearch />
      </section>
      <section>
        <h2>Articles</h2>
        <HomeArticlesSlider users={results} />
      </section>
      <section>
        <h2>Other Content</h2>
      </section>
    </>
  )
}
