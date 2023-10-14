import { Box, Container, Typography } from '@mui/material'
import {useSelector} from 'react-redux'
import React from 'react'
import DetailCatalog from '../components/DetailCatalog'
import UserNotFound from '../components/UserNotFound'

const UserInfo = () => {
  // React Hooks
  const {detail} = useSelector(state => state.userDetail)

  return (
    <>
      {
        detail ?
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
                    <img src={detail && detail.profile} alt="" style={{width: 120}} />
                  </Box>
                </Box>
                  <Typography
                    width={120}
                    textAlign={'center'}
                    marginTop={1}
                    fontSize={20}
                    fontWeight={'100'}
                  >
                    {detail && detail.username}
                  </Typography>
                  <Typography
                    width={'fit-content'}
                    textAlign={'center'}
                    marginTop={1}
                    fontSize={14}
                    fontWeight={'100'}
                    color={'gray'}
                  >
                    Joined: {detail && detail.createdAt.split('T')[0]}
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
                    {detail && detail.email}
                  </Typography>
                  <Typography
                  fontSize={14}
                  color={'black'}
                  >
                    {detail && detail.favorites.length}
                  </Typography>
                  <Typography    
                  fontSize={14}
                  color={'black'}
                  >
                    {detail && detail.purchases.length}
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
                  Updated at: {detail && detail.updatedAt.split('T')[0]}
                </Typography>
              </Box>
          </Box>
          <DetailCatalog title='Purchases' data={detail && detail.purchases}/> 
          <DetailCatalog title='Favorites' data={detail && detail.favorites}/> 
        </Container> :
        <UserNotFound/>
      }
    </>
  )
}

export default UserInfo