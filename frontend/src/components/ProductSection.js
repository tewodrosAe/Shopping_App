import React, { useState } from 'react'
import ProductCard from './ProductCard'
import UpcomingSection from './UpcomingSection'
import BestSellers from './BestSellers'
import Filter from './Filter'

function ProductSection({isDark}) {
  
  return (
    <>
    <div className='products-section'>
      <h1 className='products-section-head '>NEW TECH</h1>  
      <Filter/>
      <div className='product-cards'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    <UpcomingSection isDark={isDark}/>
    <BestSellers />
    </>
  )
}

export default ProductSection