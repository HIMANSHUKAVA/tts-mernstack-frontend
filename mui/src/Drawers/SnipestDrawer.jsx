import { AppBar, Box, Button, Drawer, IconButton,  List,  ListItem,  ListItemAvatar,  ListItemButton,  ListItemIcon,  ListItemText,  SwipeableDrawer,  Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import  HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import Accountcircle from '@mui/icons-material/AccountCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function SnipestDrawer() {
   const [count, setcount] = useState(false)
  return (
    <>
    <AppBar>
        <Toolbar>
            <IconButton onClick={()=>{setcount(true)}}>
                <MenuIcon/>
            </IconButton>
            <Typography variant='h5' flexGrow={1}>Code With Herry</Typography>


        </Toolbar>
    </AppBar>

    <SwipeableDrawer
    open={count} onClose={()=>{setcount(false)}}>
        <div style={{width:170 , padding:10}}>
        <Typography variant='h5'>Navigetion</Typography>
       <List>
        <ListItem>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItem>

        <ListItem>
            <ListItemAvatar><ShoppingCartIcon/></ListItemAvatar>
            <ListItemText>Product</ListItemText>
        </ListItem>

        <ListItem>
            <ListItemIcon><InfoIcon/></ListItemIcon>
            <ListItemText>About</ListItemText>
        </ListItem>

         <ListItem>
            <ListItemIcon><PhoneIcon/></ListItemIcon>
            <ListItemText>Contect</ListItemText>
         </ListItem>

        <ListItem>
            <ListItemIcon><Accountcircle/></ListItemIcon>
            <ListItemText>Account</ListItemText>
        </ListItem>

       </List>
       </div>
     </SwipeableDrawer>
    </>
  )
}
