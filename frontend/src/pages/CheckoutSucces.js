import { Box, Button, Container, Typography } from "@mui/material"
import { BsCheck2Circle } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const CheckoutSucces = () => {
    
    // React hooks
    const navigate = useNavigate()
    return (
        <Container
            sx={{
                height:'100vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}
        >
            <Box
                boxShadow={5}
                padding={15}
                borderRadius={10}
            >
                <BsCheck2Circle size={80} style={{width:"100%"}} color="#0DCCB1"/>
                <Typography
                    sx={{
                        fontSize:28,
                        marginBottom: 1,
                        textAlign: "center"
                    }}
                >
                    Checkout Successfull
                </Typography>
                <Typography
                    sx={{
                        fontSize:15,
                        color:'#555555',
                        textAlign: "center"
                    }}
                >
                    Thank You for shopping with us :) We hope we will 
                    continue to make you happy in your future needs as well
                </Typography>
                <Button
                    sx={{
                        marginTop:4,
                        marginLeft:'40%'
                    }}
                    onClick={() => navigate('/')}
                >
                    Go back Home
                </Button>
            </Box>
        </Container>
  )
}

export default CheckoutSucces
