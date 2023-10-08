import { Rating } from '@mui/material';
import React from 'react'

const UserComment = ({comment}) => {
  return (
    <div >
        <div style={{display:'flex', alignItems:'center', gap:10}}>
            <div className="product-comment-user">
                <img src={comment.picture} alt="comment" />
            </div>
            <h5>{comment.name}</h5>
        </div>
        <div style={{display:'flex', alignItems:'center',gap:15, marginTop: 3}}>
            <Rating
            name="read-only"
            sx={{color:'#0DCCB1', fontSize:20}}
            value={comment.stars}
            readOnly
            />
            <h4><strong style={{fontFamily:'sans-serif', fontWeight:700}}> {comment.title} </strong></h4>
        </div>
        <p style={{fontSize:14, marginTop:7, lineHeight:2, width:'90%'}}> {comment.review} </p>
    </div>
  )
}

export default UserComment