import RichTextRenderer from '@/app/_components/RichTextRenderer/RichTextRenderer'
import React from 'react'

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
