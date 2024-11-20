import React from 'react'

const ServiceCard = ({ service }: any) => {
  return (
    <li>
      <div>
        {service.serviceName}
        <br />
        {service.category.categoryName}
      </div>

      <button>Remove Product Service</button>
    </li>
  )
}

export default ServiceCard
