import React from 'react'
import Filter from './Filter'
import ProductCard from './ProductCard'
import {AiOutlineSwapLeft} from 'react-icons/ai'
import {AiOutlineSwapRight} from 'react-icons/ai'

function BestSellers() {
  return (
    <div className='products-section '>
        <h1 className='products-section-head'>Best Sellers</h1>
        <Filter/>
        <div className='scroll-horiz product-cards'>
            <AiOutlineSwapLeft className='position-icon'/>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <AiOutlineSwapRight className=' position-icon ' id='position-icon-right'/>
        </div>
    </div>
  )
}

export default BestSellers