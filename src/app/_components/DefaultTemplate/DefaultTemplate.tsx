import React from 'react'

const DefaultTemplate = ({ content }: any) => {
  return (
    <>
      <h1>Default Template</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default DefaultTemplate
