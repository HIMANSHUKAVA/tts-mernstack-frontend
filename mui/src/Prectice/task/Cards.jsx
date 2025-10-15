import { Card, CardHeader, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
export default function Cards() {
  return (
    <>

       <Container>
        <Grid container spacing={20}>
            <Grid item xs={4}>
                <Card sx={{maxWidth:250}}>
                   <CardHeader  avatar={<IconButton><PermIdentityIcon sx={{fontSize:70 , mt:"-16px"}} color='primary'/></IconButton>} subheader={<Typography variant='h5'>User</Typography>} title={<Typography variant='h4'>1,200</Typography>}/>
                </Card>
            </Grid>

               <Grid item xs={4}>
                <Card sx={{maxWidth:250}}>
                   <CardHeader  avatar={<IconButton><ArrowOutwardIcon sx={{fontSize:70 , mt:"-16px"}} color='warning'/></IconButton>} subheader={<Typography variant='h5'>Sales</Typography>} title={<Typography variant='h4'>2,900</Typography>}/>
                </Card>
            </Grid>

             <Grid item xs={4}>
                <Card sx={{maxWidth:250}}>
                   <CardHeader  avatar={<IconButton><ArrowOutwardIcon sx={{fontSize:70 , mt:"-16px"}} color='info'/></IconButton>} subheader={<Typography variant='h5'>Comments</Typography>} title={<Typography variant='h4'>1,200</Typography>}/>
                </Card>
            </Grid>
        </Grid>



       </Container>

    </>
  );
}
