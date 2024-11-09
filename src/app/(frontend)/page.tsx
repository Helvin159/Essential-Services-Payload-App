import ServiceSearch from '../_components/ServiceSearch/ServiceSearch'

export default function Home() {
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
      </section>
      <section>
        <h2>Other Content</h2>
      </section>
    </>
  )
}
