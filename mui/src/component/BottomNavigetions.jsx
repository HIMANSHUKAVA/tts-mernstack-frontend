import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, InputAdornment, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import SerchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function BottomNavigetion() 
{
  const [value, setvalue] = useState(0)
  return (
    <>
    
     <Box
    sx={{
      display: { xs: "block", md: "none" },
      position: "fixed",
      bottom: 0,
      left: 0,
      
    }}
  >
    <BottomNavigation  value={value}  onChange={(event ,newvalue )=>setvalue(newvalue)}>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Product" icon={<ShoppingCartIcon/>}/>
      <BottomNavigationAction label="About" icon={<InfoIcon/>}/>
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon/>}/>
      
    </BottomNavigation>
  </Box>
   <AppBar>
    <Toolbar>

{/* Mobail Bottom Navigetion */}
 


        <Typography variant='h5' flexGrow={1}>
            Mui Ui
        </Typography>

         {/* Serch Bar */}
         <Box sx={{ flexGrow:1, alignItems:"center" , display:{xs:"none"}}}>
            <TextField  InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SerchIcon />
                  </InputAdornment>
                ),
              }} size='small' style={{backgroundColor:"white" , borderRadius:"5px", color:"black" , }}></TextField>
         </Box>
         <Box sx={{display:{xs:"none" , md:"flex"}}}>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>About</Button>
        <Button color='inherit'>Product</Button>
        </Box>
    </Toolbar>
   </AppBar>
    
    </>
  )
}
