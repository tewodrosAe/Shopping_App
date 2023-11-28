import React from 'react'
import { BsFillBagPlusFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function HeroCard({product}) {
    // React hooks
    const navigate = useNavigate()
    return (
        <div className='hero-cardwrap'>
            <div className='hero-card-img'>
                <img src={product.picture[0]} alt="product" />
            </div>
            <div className='hero-card-words'>
               
                <div className='hero-card-ind'>
                    <h3>{product?.name}</h3>
                </div>
                <div className='hero-card-ind hero-cost'>
                    <h4>${parseInt(product?.price * 0.25)}</h4>
                    <h4><s>${product?.price}</s></h4>
                    <button className='hero-btn-buy' onClick={() => navigate(`/product/${product._id}`)}>
                        <section>Get Now</section>
                        <BsFillBagPlusFill size={11}/>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default HeroCard