import React from 'react'
import RichTextRenderer from '../RichTextRenderer/RichTextRenderer'

const DefaultTemplate = ({ title, content }: any) => {
  return (
    <>
      <h1>Default Template - {title}</h1>
      <section>
        <RichTextRenderer content={content} />
      </section>
    </>
  )
}

export default DefaultTemplate
