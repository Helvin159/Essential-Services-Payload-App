import React from 'react'
import RichTextRenderer from '@/app/_components/RichTextRenderer/RichTextRenderer'

const Biography = ({ user }: any) => {
  return (
    <>
      {user.biography !== undefined && (
        <div className="service-provider-page__bio">
          <h4>Biography</h4>
          <RichTextRenderer content={user.biography} />
        </div>
      )}
    </>
  )
}

export default Biography
