import React from 'react'

function Comments() {
  return (
    <>
    <div className='comments-wrapper'>
        <div className='comments-section'>
            <div className='comments-section-comment'>
                <h1>“</h1>
                <p>My first order arrived today in perfect condition.  
                    From the time I sent a question about the item to making the purchase,
                     to the shipping and now the delivery, your company, Tecs, has stayed in touch. 
                      Such great service.  I look forward to shopping on your site in the future and would 
                      highly recommend it.</p>
            </div>
            <div className='comment-name'>
                -Tana Brown
            </div>
            <ul className='comment-scroll'>
                <li style={{background:'#3F5B3F'}}></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        <div className='review-btn'>
            Leave Us A Review
        </div>
        </div>
        <div className='comments-section-badge'>   
        </div>
    </div>
    </>
  )
}

export default Comments