import React from 'react'

const ReviewCard = ({ review }: any) => {
  const date = new Date(review.reviewDate)
  const fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  return (
    <div>
      <h4>{review.client.fullName}</h4>
      <p>
        Rating: <span>{review.rating}</span>
        <br />
        Review Date: <span>{fullDate}</span>
      </p>
    </div>
  )
}

export default ReviewCard
