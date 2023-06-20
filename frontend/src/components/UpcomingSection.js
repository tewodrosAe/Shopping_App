import React from 'react'

function UpcomingSection({isDark}) {
  return (
    <>
        <div className={`upcoming-section ${isDark ? 'dark-theme' : 'light-theme'}` }>
        <img src='samsungs22.png' className='upcoming-section-img' alt='upcoming tech'/>
        <div className={isDark ? "breakline-dark":"breakline"}/>
        <div className='upcoming-section-words'>
            <h1>Galaxy Z Fold 3 5G</h1>
            <p>This is everything you'd want in a premium, durable, 5G smartphone.
                1 Then we made it unfold — revealing a massive screen so you can watch, 
                work and play like never before.</p>
            <button className={`upcoming-section-btn ${isDark ? 'dark-theme btn-hover-dark':'light-theme btn-hover'}`}>Pre-Order</button>
        </div>
        </div>
    </>
  )
}

export default UpcomingSection