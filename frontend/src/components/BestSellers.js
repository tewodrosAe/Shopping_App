import React from 'react'
import Filter from './Filter'
import ProductCard from './ProductCard'
import {AiOutlineSwapLeft} from 'react-icons/ai'
import {AiOutlineSwapRight} from 'react-icons/ai'

function BestSellers({width,height}) {
  return (
    <div className='best-sellers-section'>
        <h1 className='products-section-head'>Best Sellers</h1>
        <Filter/>
        <div className='best-seller-card product-cards'>
            <AiOutlineSwapLeft className='position-icon'/>
            <ProductCard width={width} height={height}/>
            <ProductCard width={width} height={height}/>
            <ProductCard width={width} height={height}/>
            <ProductCard width={width} height={height}/>
            <AiOutlineSwapRight className='position-icon position-icon-right'/>
        </div>
    </div>
  )
}

export default BestSellers