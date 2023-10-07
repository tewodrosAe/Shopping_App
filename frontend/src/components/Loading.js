import React from 'react'
import {InfinitySpin} from 'react-loader-spinner'
const Loading = ({words}) => {
  return (
    <div style={{position:'absolute', top:0,display: 'flex', flexDirection:'column',justifyContent:'center', alignItems: 'center',height: '100vh', width:'100vw', backdropFilter:'blur(5px)', background:'white',zIndex: 20}}>
        <InfinitySpin 
        width='200'
        color="#0DCCB1" 
        />
        <div>
            {words}
        </div>
    </div>

  )
}

export default Loading