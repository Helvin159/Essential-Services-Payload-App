import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { BasePayload } from 'payload'
import React from 'react'
import Image from 'next/image'
import Reviews from './_components/Reviews/Reviews'
import Biography from './_components/Biography/Biography'
import ServiceProviderCalendar from './_components/ServiceProviderCalendar/ServiceProviderCalendar'
import ContactProvider from './_components/ContactProvider/ContactProvider'
import ContactProviderModal from './_components/ContactProviderModal/ContactProviderModal'

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  const payload: BasePayload = await getPayloadHMR({ config })
  const fallBackImg =
    'https://needaservice.mrrymer.com/api/media/file/avatar_placeholder_neutral.jpg'

  const user = await payload
    .find({
      collection: 'users',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })
    .then((user) => user.docs[0])

  console.log(user)

  return (
    <>
      <section className="service-provider-page__header">
        <h1>{user.fullName}</h1>
      </section>
      <section className="service-provider-page">
        <div className="service-provider-page__left">
          <div className="">
            <Image
              src={user.featuredImageUrl || fallBackImg}
              width={250}
              height={250}
              alt={`Head shot of ${user.fullName}`}
              className="service-provider-page__avatar"
            />
          </div>
          <div className="service-provider-page__contact-details">
            <ContactProvider user={user} />
            <h3>Offered Services:</h3>
            <ul>
              {user.servicesOffered?.map((i: any, k: any) => {
                return <li key={k}>{i.serviceName}</li>
              })}
            </ul>
          </div>
        </div>
        <div className="service-provider-page__right">
          <div className="service-provider-page__details">
            <h3>About Bo</h3>
            {/* Biography */}
            <Biography user={user} />
            {/*
                Want to have side by side flex box here, two cards,
                one for bookings and the other for reviews
              */}
            <div className="service-provider-page__details__booking-reviews">
              <div className="service-provider-page__details__booking-reviews__card">
                {/* Bookings */}
                <h3>Bookings:</h3>
                <ServiceProviderCalendar bookings={user?.bookings} />
              </div>
              <div className="service-provider-page__details__booking-reviews__card">
                {/* Reviews */}
                {user.reviews !== undefined && <Reviews user={user} />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactProviderModal id="contact-provider-modal" title={user.fullName}>
        <form>
          <label htmlFor=""></label>
          <input id="to" value={user.id} type="hidden" />

          <label htmlFor="contact-provider-email">Your Email</label>
          <input id="contact-provider-email" type="email" placeholder="Email" />

          <label>Service</label>
          <select defaultValue={'Plumbing'} title="Select service">
            {user.servicesOffered?.map((i: any) => {
              return (
                <option key={i.id} value={i.id}>
                  {i.serviceName}
                </option>
              )
            })}
            <option value={'plumbing'}>Plumbing</option>
          </select>
        </form>
      </ContactProviderModal>
    </>
  )
}

export default Page
