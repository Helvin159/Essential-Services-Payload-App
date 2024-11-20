import React from 'react'

const DashboardServiceProviderProducts = ({ services }: any) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const searchInputId = 'provider-product-search'

  const handleSearch = (e: any) => {
    console.log(e)
  }

  return (
    services?.map && (
      <div id="service-provider-products">
        <div className="service-provider-products">
          <h3>Products</h3>
        </div>
        <div className="service-provider-products__search">
          <label htmlFor={searchInputId}>Search</label>
          <input
            type="text"
            id={searchInputId}
            placeholder="Search for products"
            onChange={handleSearch}
          />
        </div>
        <ul>
          {services.map((i: any, k: number) => {
            return (
              <li key={k}>
                {i.serviceName}
                <br />
                {i.category.categoryName}
              </li>
            )
          })}
        </ul>
      </div>
    )
  )
}

export default DashboardServiceProviderProducts
