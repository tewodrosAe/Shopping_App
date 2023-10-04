import React from 'react'

function ProductCard ({slide, product, number}) {
  return (
    <div className={`product-card ${slide && "slide-card"}`}>
        <div className='product-card-img' >
          {<img src={`${product?.picture[0]}`} alt={`${product?.name}`}/>}
        </div>
        <h4>{
          product?.name.length > 50 ? 
          `${product?.name.slice(0,50)}...`:
          product?.name
        }</h4>
        <div className='product-card-cost'>
            <h5>{product?.category}</h5>
            <h4>{`$${product?.price}`}</h4>
        </div>
    </div>
  )
}

export default ProductCard


// ${product?.picture[0]}