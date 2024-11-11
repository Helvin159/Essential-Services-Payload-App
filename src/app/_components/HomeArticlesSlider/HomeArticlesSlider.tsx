'use client'
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

const HomeArticlesSlider = ({ users }: any) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      {users.map((i: any, k: number) => {
        return (
          <SwiperSlide key={k}>
            <Link href={`/${i.slug}`} className="home__articles__card">
              <div className="home__articles__card__header">
                <h1>{i.title}</h1>
              </div>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )

  // return (
  //   <div className="">
  //     <div className="swiper">
  //       <div className="swiper-wrapper">
  //         {users.map((i, k) => {
  //           return (
  //             <Link href={`/${i.slug}`} className="home__articles__card" key={k}>
  //               <div className="home__articles__card__header">
  //                 <h1>{i.title}</h1>
  //               </div>
  //             </Link>
  //           )
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default HomeArticlesSlider
