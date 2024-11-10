import React from 'react'
import RichTextRenderer from '../RichTextRenderer/RichTextRenderer'

const ArticleTemplate = ({ title, content }: any) => {
  return (
    <>
      <section>
        <h1>{title}</h1>
      </section>
      <section>
        <RichTextRenderer content={content} />
      </section>
    </>
  )
}

export default ArticleTemplate
