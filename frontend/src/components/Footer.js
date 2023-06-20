import React from 'react'
import TechBadge from './TechBadge'

function Footer({isDark}) {
  return (
    <>
      <TechBadge isDark={isDark}/>
      <div className='footer-section'>
        <div className='footer-word'>
          <div className='footer-word-one'>
            <small>Tech Stop</small>
          </div>
          <div className='footer-word-two'>
            <ul>
              <li id={isDark ? 'footer-word-two-header-dark':'footer-word-two-header'} >Product</li>
              <li>Computers</li>
              <li>Phones</li>
              <li>Tablets</li>
              <li>Consoles</li>
              <li>Accesseries</li>
              <li>Tablets</li>
              <li>Laptops</li>
            </ul>
            <ul>
              <li id={isDark ? 'footer-word-two-header-dark':'footer-word-two-header'}>Associate Companies</li>
              <li>Sony</li>
              <li>Samsung</li>
              <li>Apple</li>
              <li>HP</li>
              <li>Lenovo</li>
            </ul>
          </div>
        </div>
        <div className='line-break-one'></div>
        <div className='footer-section-three footer-section-two'>© 2022-2023, Techstop.com, .Inc or its affiliates</div>
        <div className='line-break-two'></div>
        <div className='footer-section-three'>
          <small>stay in the loop?</small>
          <div className='footer-social-tags'>
            <img src={isDark ? 'fb-dark.png':'facebook.svg'} alt='facebook'/>
            <img src= {isDark ? 'instagram-dark.png':'instagram.svg'} alt='instagram'/>
            <img src= {isDark ? 'twitter-dark.png':'twitter.svg'} alt='twitter'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer