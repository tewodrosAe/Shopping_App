import React from 'react'

function ProductCard ({slide}) {
  return (
    <div className={`product-card ${slide && "slide-card"}`}>
        <div className='product-card-img' >
        </div>
        <h4>Hp Omen 15t</h4>
        <div className='product-card-cost'>
            <h5>Computers</h5>
            <h4>$1299</h4>
        </div>
    </div>
  )
}

export default ProductCard