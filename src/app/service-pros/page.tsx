import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Card from './_components/Card'

import './_assets/styles.css'

export default async function Page() {
  const payload = await getPayloadHMR({ config })

  const result = await payload
    .find({
      collection: 'users',
      limit: 0,
      sort: 'fullName',
    })
    .then((data) => data.docs)

  // await payload.create({
  //   collection: 'pages',
  //   data: {
  //     title: 'Yerr',
  //     slug: 'yerr-whats',
  //     status: 'published',
  //     content: {
  //       root: {
  //         type: 'root',
  //         children: [
  //           {
  //             type: 'heading',
  //             tag: 'h2',
  //             children: [
  //               {
  //                 type: 'text',
  //                 text: 'Welcome to yerr whats up',
  //                 version: 1,
  //               },
  //             ],
  //             direction: null,
  //             format: '', // Set to an empty string if no specific format is needed
  //             indent: 0,
  //             version: 1,
  //           },
  //         ],
  //         direction: null,
  //         format: '', // Set to an empty string if no specific format is needed
  //         indent: 0,
  //         version: 1,
  //       },
  //     },
  //   },
  // })

  return (
    <>
      <section className="header">
        <h1>Find Trusted Service Professionals: Handymen, Maintenance Experts, and More</h1>
      </section>
      <section>
        <div className="pros-wrapper">
          {result.map((i, k) => {
            return <Card user={i} key={k} />
          })}
        </div>
      </section>
    </>
  )
}
