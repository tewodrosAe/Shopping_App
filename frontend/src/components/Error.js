import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaSadCry} from 'react-icons/fa'

const Error = ({message}) => {
  const navigate = useNavigate()
  return (
    <Container
      sx={{
        width: '60vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className='error'
    >
        <Container
        sx={{
            display: 'flex',
            position:'relative',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border:'1px solid black',
            borderRadius:'20px',
            overflow: 'hidden'
        }}

        >
            <Typography
                display={'flex'}
                alignItems={'center'}
                gap={2}
                fontSize={40}
                textAlign={'center'}
                mr='auto'
                ml='auto'
                color={'white'}
                fontFamily={'cursive'}
                
            >
                <FaSadCry size={35} color='#ffcc33'/>
                {message}
            </Typography>
            <img src="/rain.gif" alt=""  style={{position:'absolute', zIndex:'-1', width:'100%', height:'100%', filter:'brightness(60%)'}}/>
            <img src='/Error.png' alt="error" style={{filter: 'brightness(70%)'}}/>
        </Container>
    </Container>
  )
}

export default Error
