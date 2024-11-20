import RichTextRenderer from '@/app/_components/RichTextRenderer/RichTextRenderer'
import React from 'react'

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
