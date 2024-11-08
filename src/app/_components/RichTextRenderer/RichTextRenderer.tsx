import React from 'react'
import { PayloadLexicalReact } from '@zapal/payload-lexical-react'

const RichTextRenderer = ({ content }: any) => {
  return <PayloadLexicalReact content={content} />
}

export default RichTextRenderer
