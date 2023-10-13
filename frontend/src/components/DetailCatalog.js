import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const DetailCatalog = ({title}) => {
    const hasQuantity = title === 'Purchases'
    return (
        <Container
            sx={{
                marginTop: 15,
                background:'white',
                boxShadow: 3,
                borderRadius:5,
                paddingTop: 4
            }}
        >
            <Typography
                fontSize={23}
                textAlign={'center'}
                marginBottom={1}
                borderBottom={'1px solid #b7b3b35f'}
                paddingBottom={1}
            >
                {title}
            </Typography>
            <TableContainer >
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Picture</TableCell>
                    <TableCell align="right">Name</TableCell>
                    {
                        hasQuantity ?
                        <TableCell align="right">Quantity</TableCell>:
                        <TableCell align="right"></TableCell>
                    }
                    
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>
                        <img src="https://res.cloudinary.com/dkks3bhwk/image/upload/v1696495482/Tech_shops/product49.76202517703698.png" alt="" style={{maxHeight:80}}/>
                    </TableCell>
                    <TableCell align='right'>
                        Iphone 14
                    </TableCell>
                    <TableCell align='right'>
                    <Button variant="contained" sx={{bgcolor:'#08222b'}} disableElevation>
                        Go to Product
                    </Button>
                    </TableCell>
                </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    )
}

export default DetailCatalog