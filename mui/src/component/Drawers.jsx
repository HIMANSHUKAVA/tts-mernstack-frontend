import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContectIcon from '@mui/icons-material/Phone'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Drawers() {
  const [count, setcount] = useState(false);

  return (
    <>
      <AppBar sx={{ bgcolor: "#e0e0e0" }}>
        <Toolbar>
          <IconButton
            onClick={() => {
              setcount(true);
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" flexGrow={1} sx={{ color: "black" }}>
            Lern Coding
          </Typography>
          <Box>
            <Button sx={{ color: "black" }}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={count} onClose={()=>{setcount(false)}} >
        <div style={{width:200 , padding:10}}>
          <Typography variant="h5">Navigetion</Typography>
           <List>
            <ListItem>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary="Home"/>
            </ListItem>

            <ListItem>
              <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
              <ListItemText primary="Products"/>
            </ListItem>

            <ListItem>
              <ListItemIcon><InfoIcon/></ListItemIcon>
              <ListItemText primary="About"/>
            </ListItem>

            <ListItem>
              <ListItemIcon><ContectIcon/></ListItemIcon>
              <ListItemText primary="Contect"/>
            </ListItem>

            <ListItem>
              <ListItemIcon><AccountCircleIcon/></ListItemIcon>
              <ListItemText primary="Account"/>
            </ListItem>
           </List>
           </div>
      </Drawer>

    </>
  );
}

// #e0e0e0
