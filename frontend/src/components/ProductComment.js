import React, { useState } from 'react'
import Ratings from './Rating'
import axios from 'axios'
import { path } from '../constants'
const ProductComment = ({detail,productId}) => {
    // React Hooks
    const [stars, setStars] = useState(1)
    const [review, setReview] = useState('')
    
    // Eventhandlers
    const handleComment = async() => {
        const comment =  {stars, review, name: detail.username, user_id: detail.user_id} 
        try{
            const newComment = await axios.post(`${path}/product/comment`,{productId, comment})
            console.log(newComment)
        }catch(e){
            console.log(e)
        }
    }
    return (
    <>
        <div className="product-review-user">
        <div className="product-user-image" > 
            <img src={detail?.profile} alt="profile" />
        </div>
        <input type="text" placeholder='Leave a customer review...' value={review} onChange={(e) => setReview(e.target.value)}/>
        <Ratings value={stars} setValue={setStars}/>
        </div>
        <button className='product-review-button' onClick={handleComment}>Comment</button>
    </>
  )
}

export default ProductComment
