import React from 'react'
import Filter from './Filter'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
//Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function BestSellers({products}) {
  return (
    <div className="products-section ">
      <h1 className="products-section-head">Best Sellers</h1>
      <Filter />
      <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={'auto'}
      >
        {
          products.map(product => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} slide={true} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default BestSellers
