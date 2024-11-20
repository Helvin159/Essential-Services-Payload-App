import React from 'react'
import DealsManagement from './_components/DealsManagement'
import { getPayload } from 'payload'
import config from '@payload-config'

const Page = async () => {
  const payload = await getPayload({ config })

  const res = await payload
    .find({
      collection: 'sales-pipeline',
    })
    .then((data) => data.docs)

  return (
    <>
      <div>
        <section></section>

        <section>
          <div className="sales-pipeline__">
            {/* left column */}
            <div></div>

            {/* Right Column */}
            <div>
              {/* Dashboard Elements */}
              <div>
                <DealsManagement />
              </div>

              <div></div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Page
