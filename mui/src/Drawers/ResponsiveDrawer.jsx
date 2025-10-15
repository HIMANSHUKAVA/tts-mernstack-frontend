import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Accountcircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ResponsiveDrawer() {
  const [count, setcount] = useState(false);
  const [open, setopen] = useState(false);

  const drawers = (
    <>
      <Toolbar />
      <div style={{ width: 170, padding: 10 }}>
        <Typography variant="h5">Navigetion</Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <ShoppingCartIcon />
            </ListItemAvatar>
            <ListItemText>Product</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText>Contect</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Accountcircle />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItem>
        </List>
      </div>
    </>
  );
  return (
    <>
      <AppBar 
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => {
              setopen(true);
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" flexGrow={1}>
            My WebSite
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        open={count}
        onClose={() => {
          setcount(false);
        }}
        variant="permanent"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        {drawers}
      </Drawer>

      <Drawer
        open={open}
        sx={{ display: { md: "none", xs: "block" } }}
        onClose={() => setopen(false)}
        variant="temporary"
      >
        {drawers}
      </Drawer>

      <Toolbar />
      <Box
        sx={{
          flexGrow: { xs: 1, md: 1 },
          p: { xs: 0, md: 3 },
          ml: { xs: 0, md: "170px" },
          textAlign: "justify",
        }}
      >
        <Typography variant="h6">Lets Start Coding</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          obcaecati, quas beatae amet quibusdam adipisci ut corrupti ea in? Rem
          voluptatibus rerum doloribus a voluptatem illo, quidem commodi tenetur
          nisi dolores aliquam magnam explicabo quasi inventore ducimus modi
          enim similique aut quod harum expedita dignissimos officia!
          Perspiciatis dolor ipsum ratione?
        </Typography>
      </Box>
    </>
  );
}
