import { Rating } from '@mui/material';
import React from 'react'

const UserComment = () => {
  return (
    <div >
        <div style={{display:'flex', alignItems:'center', gap:10}}>
            <div className="product-comment-user">
                <img src="https://thoughtcatalog.com/wp-content/uploads/2016/08/photo-1441622915984-05d13dfb3d8c.jpg?w=1140" alt="comment" />
            </div>
            <h5>Terry henry</h5>
        </div>
        <div style={{display:'flex', alignItems:'center',gap:15, marginTop: 3}}>
            <Rating
            name="read-only"
            sx={{color:'#0DCCB1', fontSize:20}}
            value={4}
            readOnly
            />
            <h4><strong style={{fontFamily:'sans-serif', fontWeight:700}}> I like this very much </strong></h4>
        </div>
        <p style={{fontSize:14, marginTop:7, lineHeight:2, width:'90%'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
  )
}

export default UserComment