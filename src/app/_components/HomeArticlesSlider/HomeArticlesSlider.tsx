import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import React from 'react'

const HomeArticlesSlider = async () => {
  const payload = await getPayloadHMR({ config })

  return <div>HomeArticlesSlider</div>
}

export default HomeArticlesSlider
