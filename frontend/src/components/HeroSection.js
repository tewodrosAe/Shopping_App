import HeroCard from './HeroCard.js'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const imgVariants = {
    animate : {
      y:[0,5,0], 
      rotate:[14,15,14],
      transition:{
        repeat: Infinity,
        duration:4,
      }
      
    }
  }
  
  const navigate = useNavigate()
  return (
    <div className='heroWrapper'>
    <div className='hero'>
        <div className='hero-section-grid'>
          <div className='hero-section-words'>
              <h1>GET YOUR PHONE <br/>RIGHT NOW</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim
                <br/><br/>
                sapien lacinia, volutpat ante non, porttitor est.</p>
                <div className="image"
                >
                  <motion.img  src="https://png.monster/wp-content/uploads/2022/09/png.monster-209-323x370.png.webp" alt=""
                    variants={imgVariants}
                    animate='animate'
                    while
                  />
              </div>
              <button onClick={() => navigate('/product/1')}>Buy Now</button>
          </div>
          <div className='hero-section-item'>
            <div className='rect'>
              <h2>40% OFF</h2>
              <p>You can get 40% off this product if you buy now. </p>
            </div>
          </div>
        </div>
        <div className="best-month">
          <div className='hero-card'>
            <h1>THIS MONTH</h1>
          </div>
          <div className='hero-card-col'>
            <HeroCard/>
            <HeroCard/>
            <HeroCard/>
            <HeroCard/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection

