import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard ({slide, product}) {
  // React hooks
  const navigate = useNavigate()
  return (
    <div className={`product-card pointer ${slide && "slide-card"}`} onClick={() => navigate(`/product/${product._id}`)}>
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