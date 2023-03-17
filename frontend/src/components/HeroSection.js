import React from 'react'
import HeroCard from './HeroCard.js'
function HeroSection() {
  return (
    <div className='heroWrapper'>
    <div className='hero'>
        <div className='hero-section-grid'>
          <div className='hero-section-words'>
              <h1>GET YOUR PHONE <br/>RIGHT NOW</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim
                <br/><br/>
                sapien lacinia, volutpat ante non, porttitor est.</p>
              <button>Buy Now</button>
          </div>
          <div className='hero-section-item'>
            <div className='rect'>
              <h2>40% OFF</h2>
              <p>You can get 40% off this product if you buy now. </p>
            </div>
          </div>
        </div>
        <div className='hero-card'>
          <h1>THIS MONTH</h1>
        </div>
        <div className='hero-card-col'>
          <HeroCard/>
          <HeroCard/>
          <HeroCard/>
          <HeroCard/>
          <HeroCard/>
        </div>
    </div>
    </div>
  )
}

export default HeroSection