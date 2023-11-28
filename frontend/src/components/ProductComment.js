import React, { useState } from 'react'
import Ratings from './Rating'
import axios from 'axios'
import { path } from '../constants'
const ProductComment = ({detail,productId, setProduct}) => {
    // React Hooks
    const [stars, setStars] = useState(1)
    const [title, setTitle] = useState('')
    const [review, setReview] = useState('')
    const [error, setError] = useState('')

    // Eventhandlers
    const handleComment = async() => {
        if(review === '' || title === ''){
            setError('Please fill all fields :)')
            return 0
        }
        const comment =  {stars, review, title,name: detail.username, user_id: detail.user_id, picture:detail.profile} 
        try{
            const newComment = await axios.post(`${path}/product/comment`,{productId, comment})
            setProduct(newComment.data)
            setStars(1)
            setReview('')
            setTitle('')
        }catch(e){
            setError(e.response.data.error)
        }
    }
    return (
    <>
        <div className="product-review-user">
        <div className="product-user-image" > 
            <img src={detail?.profile} alt="profile" />
        </div>
        <div className='product-review-input'>
            <input type="text" placeholder='Title to the review...' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea type="text" placeholder='Leave a customer review...' value={review} onChange={(e) => setReview(e.target.value)}/>
        </div>
        <Ratings value={stars} setValue={setStars}/>
        </div>
        <button className='product-review-button' onClick={handleComment}>Comment</button>
        {
            error !== '' && <div className='error-message' style={{fontSize:13, textAlign:'center', marginTop:10}}>*{error}</div>
        }
    </>
  )
}

export default ProductComment
