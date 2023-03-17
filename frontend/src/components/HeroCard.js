import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagPlusFill } from 'react-icons/bs'

function HeroCard() {
  return (
    <div className='hero-cardwrap'>
        <div className='hero-card-img'>

        </div>
        <div className='hero-card-words'>
            <div className='hero-card-ind'>
                <AiFillStar color='yellow'/>
                <h6>(11.6k Reviews)</h6>
            </div>
            <div className='hero-card-ind'>
                <h3>Samsung S22 Ultra</h3>
            </div>
            <div className='hero-card-ind hero-cost'>
                <h4>$350</h4>
                <h4><s>$500</s></h4>
                <button className='hero-btn-buy'>
                    <section>Get Now</section>
                    <BsFillBagPlusFill size={11}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HeroCard