import React, { useState } from 'react'
import ProductCard from './ProductCard'
import UpcomingSection from './UpcomingSection'
import BestSellers from './BestSellers'
import Filter from './Filter'

function ProductSection() {
  const [width,setWidth] = useState(245)
  const [height,setHeight] = useState(275)
  return (
    <>
    <div className='products-section'>
      <h1 className='products-section-head'>NEW TECH</h1>  
      <Filter/>
      <div className='product-cards'>
        <ProductCard width={width} height={height}/>
        <ProductCard width={width} height={height}/>
        <ProductCard width={width} height={height}/>
        <ProductCard width={width} height={height}/>
        <ProductCard width={width} height={height}/>
        <ProductCard width={width} height={height}/>
        <ProductCard width={width} height={height}/>
        <ProductCard width={width} height={height}/>
      </div>
    </div>
    <UpcomingSection/>
    <BestSellers width={290} height={340}/>
    </>
  )
}

export default ProductSection