import React from 'react'
import ReviewStars from '../../../../../../_components/ReviewStars'

const ReviewCard = ({ review }: any) => {
  const date = new Date(review.reviewDate)
  const fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  return (
    <div>
      <h4>{review.client.fullName}</h4>
      <p>
        Rating: <ReviewStars rating={review.rating} />
      </p>
      <p>
        Review Date: <span>{fullDate}</span>
      </p>
    </div>
  )
}

export default ReviewCard
