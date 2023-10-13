import { Box, Container, Typography } from '@mui/material'
import {useSelector} from 'react-redux'
import React from 'react'
import DetailCatalog from '../components/DetailCatalog'

const UserInfo = () => {
  const {detail} = useSelector(state => state.userDetail)
  console.log(detail)
  return (
    <Container
      sx={{
        marginTop: 10,
        padding: 5,
      }}
    >
        <Box
          boxShadow={4}
          padding={5}
          display={'flex'}
        >
          <Box>
            <Box
              borderRadius={'50%'}
              border={'1px solid #d1d1d1'}
              padding={1}
            >
              <Box
                borderRadius={'50%'}
                overflow={'hidden'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <img src='https://media.glamourmagazine.co.uk/photos/643911c5faffaaf0fce7d598/1:1/w_1280,h_1280,c_limit/SOFT%20GIRL%20AESTHETIC%20140423%20rachelteetyler_L.jpeg' alt="" style={{width: 120}} />
              </Box>
            </Box>
              <Typography
                width={120}
                textAlign={'center'}
                marginTop={1}
                fontSize={20}
                fontWeight={'100'}
              >
                Alisha
              </Typography>
              <Typography
                width={120}
                textAlign={'center'}
                marginTop={1}
                fontSize={14}
                fontWeight={'100'}
                color={'gray'}
              >
                Joined: 2/22/2012
              </Typography>
          </Box>
          <Box 
          backgroundColor='rgb(175, 175, 175)' 
          width={'1px'}
          minHeight={'100%'}
          marginLeft={4}
          />
          <Box
            marginLeft={10}
            width={'100%'}
            height={200}
          >
            <Typography
              fontSize={17}
              fontWeight={500}
            >
              Basic Info
            </Typography>
            <Box
              display={'grid'}
              gridTemplateColumns={'1fr 1fr 1fr'}
              rowGap={1}
              marginTop={1}
              color={'gray'}
              width={'100%'}
            >
              <Typography 
              fontSize={14}
              >
                Email
              </Typography>
              <Typography
              fontSize={14}
              >
                Favourites
              </Typography>
              <Typography    
              fontSize={14}
              >
                Purchases
              </Typography>
              <Typography 
              fontSize={14}
              color={'black'}
              >
                tewodrosaemiro@gmail.com
              </Typography>
              <Typography
              fontSize={14}
              color={'black'}
              >
                10
              </Typography>
              <Typography    
              fontSize={14}
              color={'black'}
              >
                12
              </Typography>
            </Box>
            <Typography
              width={'fit-content'}
              textAlign={'center'}
              marginTop={12}
              fontSize={14}
              fontWeight={'100'}
              color={'gray'}
            >
              Updated at: 4/20/2013
            </Typography>
          </Box>
      </Box>
      <DetailCatalog title='Purchases'/> 
      <DetailCatalog title='Favorites'/> 
    </Container>
  )
}

export default UserInfo