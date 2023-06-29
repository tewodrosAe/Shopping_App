import React from 'react'
import Filter from './Filter'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
//Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function BestSellers() {
  return (
    <div className="products-section ">
      <h1 className="products-section-head">Best Sellers</h1>
      <Filter />
      <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={'auto'}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ProductCard slide={true} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard slide={true} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard slide={true} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard slide={true} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard slide={true} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BestSellers
