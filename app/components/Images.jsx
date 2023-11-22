'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Images = async({params}) => {

    async function getimg(){
        const res = await fetch(`https://dummyjson.com/products/${params.id}`)
        const data = await res.json()
        return data.images
      }

      const imag = await getimg()
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
  {
    imag.map((imagine, index)=>(
      <SwiperSlide>
      
      <img key={index} src={imagine}  className='w-full h-full object-cover' />
    
      </SwiperSlide>
    ))
  }
  </Swiper>
  )
}

export default Images