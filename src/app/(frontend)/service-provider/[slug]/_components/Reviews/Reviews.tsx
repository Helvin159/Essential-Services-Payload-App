import React from 'react'
import ReviewCard from './ReviewCard/ReviewCard'

const Reviews = ({ user }: any) => {
  console.log(user)
  return (
    <div className="service-provider-page__reviews">
      <h3>Reviews:</h3>
      {user.reviews?.map((i: any, k: number) => {
        return <ReviewCard review={i} key={k} />
      })}
    </div>
  )
}

export default Reviews
