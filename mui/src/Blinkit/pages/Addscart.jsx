import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Box, Button, CardContent, Grid, Typography } from '@mui/material'
import Flow from '../Flow'
import { Card, CardMedia, Container, Toolbar } from '@mui/material'

export default function Addscart() {
  const [cart, setcart] = useState([])
  useEffect(() => {
    
    axios
    .get(`http://localhost:8080/view-cart`)
    .then((Response)=>{
      setcart(Response.data)
    })


  }, [])
  
  return (
    <>
    
    <Flow/>
    <Toolbar/>
    <Container>
      <Box sx={{ml:"190px", p:2}}>
        <h1>Cart Item</h1>
        <Grid Container spacing={2}>
          {cart.map((c,index)=>(
            <Grid item xs={3}>
              <Card key={index}>
                <CardMedia component='img' image={`data:image/jpeg;base64,${c.photo}`} alt={c.name} height='200'/>
                <CardContent>
                  <Typography variant='h6'>{c.name}</Typography>
                  <Typography>₹{c.price}</Typography>
                  <Typography>{c.detail}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    

    </>
  )
}
