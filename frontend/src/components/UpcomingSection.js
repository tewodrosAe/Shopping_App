import React from 'react'

function UpcomingSection() {
  return (
    <>
        <div className='upcoming-section'>
        <img src='gala.png' className='upcoming-section-img' alt='upcoming tech'/>
        <div className='upcoming-section-words'>
            <h1>Galaxy Z Fold 3 5G</h1>
            <p>This is everything you'd want in a premium, durable, 5G smartphone.
                1 Then we made it unfold — revealing a massive screen so you can watch, 
                work and play like never before.</p>
            <button className='upcoming-section-btn'>Pre-Order</button>
        </div>
        </div>
    </>
  )
}

export default UpcomingSection