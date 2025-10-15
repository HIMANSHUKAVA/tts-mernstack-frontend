import { Button } from '@mui/material'
import React, { useState } from 'react'

import DeleteIcon  from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Edit , Shop } from '@mui/icons-material';

import IconButton from '@mui/material/IconButton';
import { Home } from '@mui/icons-material';
import { ShoppingCart } from '@mui/icons-material';
export default function Buttons() {
  const [loading , setloading] = useState(false)

  const handlchange = (e) =>{
    setloading(true);

   
    setTimeout(() => {
      setloading(false)
    },2000);
  }


  return (
  <>
   {/* <Button variant='text'>Login</Button>
   <Button variant='outlined'>Login</Button>
   <Button variant='contained'>Login</Button>



   <Button variant='contained' color='success' disabled>Login</Button>
   
   <Button variant='outlined'>Login</Button> */}


   {/* Button sizes
   <Button variant='contained' color='info' size='medium'>Login</Button>
   <Button variant='contained' color='info' size='large'>Login</Button>
   <Button variant='contained' color='info' size='small'>Login</Button> */}

    
    {/* lable with icon
    <Button variant='text' color='primary' startIcon={<DeleteIcon/>}>Deleat</Button>
    <Button variant='outlined' color='secondary' endIcon={<SendIcon/>}>Send</Button>

    <Button variant='text' color='error' size='medium' endIcon={<Edit/>}>Edit</Button>

    <Button variant='contained' color='inherit' size='small' startIcon={<Shop/>}>Shoping</Button>
     */}


        {/* icon button
       <IconButton>
        <DeleteIcon fontSize='inherit'/>
       </IconButton>

       <IconButton>
        <Home color='primary' fontSize='large'/>
       </IconButton> */}


      <IconButton onClick={handlchange}  disabled={loading}>
        <ShoppingCart fontSize='large'/>
      </IconButton>




      



  </>
  )
}
