import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const DetailCatalog = ({title, data}) => {
    // React Hooks
    const navigate = useNavigate()
    // Declared constants
    const hasQuantity = title === 'Purchases'
    // Event listeners
    const handleRedirect = (path) => {
        if(!hasQuantity){
            navigate(`/product/${path}`)
        }
    }
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
                <TableRow
                    
                >
                    <TableCell>Picture</TableCell>
                    <TableCell align="right" sx={{width:15, paddingLeft:33, paddingRight:6}}>Name</TableCell>
                    {
                        hasQuantity ?
                        <TableCell align="right" sx={{paddingRight: 10}}>Quantity</TableCell>:
                        <TableCell align="right"></TableCell>
                    }
                    
                </TableRow>
                </TableHead>
                <TableBody>
                {
                    data &&
                    data.map(d => 
                        <TableRow sx={{cursor: 'pointer'}} onClick={() =>  handleRedirect(d._id)} key={d._id}>
                            <TableCell>
                                <img src={`${!hasQuantity ? d?.picture[0] : d?.products[0].image}`} alt="" style={{maxHeight:80}}/>
                            </TableCell>
                            <TableCell align='right' >
                                {!hasQuantity ? d.name : <>{d.products[0].name }  {d.products.length > 1 && `and ${d.products.length - 1} More...`}</>}
                            </TableCell>
                            <TableCell align='right' >
                                {
                                    hasQuantity ?
                                    <div style={{paddingLeft: 45, textAlign:'right', paddingRight: 85}}>{d.products[0].quantity}</div>:
                                    <Button variant="contained" sx={{bgcolor:'#08222b'}} disableElevation>
                                        Go to Product
                                    </Button>
                                }
                            </TableCell>
                        </TableRow>
                    )   
                }
               
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    )
}

export default DetailCatalog