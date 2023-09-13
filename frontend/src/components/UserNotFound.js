import { Box, Button, Container, Typography } from "@mui/material"
import {useNavigate} from 'react-router-dom'

const UserNotFound = () => {
  const navigate = useNavigate()
  return (
    <Container sx={{width:'100vw',marginTop:12,marginBottom:22,display:'flex',justifyContent:'center',alignItems:"center"}}>
        <Box
            sx={{
                width: 500,
                backgroundColor: 'white',
                boxShadow:5,
                borderRadius:5,
                padding:5
              }}
        >
            <Typography
                sx={{
                    fontSize:20,
                    textAlign:'center',
                    fontFamily:'Inter,sanserif'
                }}
            >
                You must be logged in to gain access 
            </Typography>
            <Container sx={{display:"flex",justifyContent:'center',gap:2,marginTop:2}}>
                <Button variant="contained" onClick={() => navigate('/user/login')}>Sign in</Button>
                <Button variant="outlined" sx={{color:'black',border:'1px solid rgba(0,0,0,0.2)'}} onClick={() => navigate('/user/signup')}>Signup</Button>
            </Container>
        </Box>
    </Container>
  )
}

export default UserNotFound