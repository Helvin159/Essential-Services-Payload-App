import HomeArticlesSlider from '../_components/HomeArticlesSlider/HomeArticlesSlider'
import ServiceSearch from '../_components/ServiceSearch/ServiceSearch'

export default function Home() {
  console.log(process.env.NODE_ENV)
  return (
    <>
      <section>
        <div className="home-header">
          <h1>Search Here!</h1>
        </div>
        <ServiceSearch />
      </section>
      <section>
        <h2>Articles</h2>
        <HomeArticlesSlider />
      </section>
      <section>
        <h2>Other Content</h2>
      </section>
    </>
  )
}
