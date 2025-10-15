import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
export default function Headers() {
  const [menu, setmenu] = useState(null);
  const [anchel, setanchel] = useState(null);
  const handlmenuopen = (e) => {
    setmenu(e.currentTarget);
  };

  const [order, setorder] = useState(null);

  const handorderopen = (e) => {
    setorder(e.currentTarget);
  };

  const handlmenucloase = () => {
    setmenu(null);
  };

  const handlorderclose = () => {
    setorder(null);
  };

  const handlmenubarclose =()=>{
     setanchel(null)
  }

  const  handlopen=(e)=>{
     setanchel(e.currentTarget);
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          {/* Mobail Responsiver */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
            <IconButton onClick={handlopen}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchel}
              open={Boolean(anchel)}
              onClose={handlmenubarclose}
            >
              <MenuItem>Home</MenuItem>
              <MenuItem>About us</MenuItem>
              <MenuItem onClick={handlmenuopen}>Menu</MenuItem>
              <Menu
                anchorEl={menu}
                open={Boolean(menu)}
                onClose={handlmenucloase}
              >
                <MenuItem onClick={handlmenucloase}>Chines</MenuItem>
                <MenuItem onClick={handlmenucloase}>Punjabi</MenuItem>
                <MenuItem onClick={handlmenucloase}>FastFood</MenuItem>
                <MenuItem onClick={handlmenucloase}>SouthIndian</MenuItem>
                <MenuItem onClick={handlmenucloase}>Gujrati</MenuItem>
              </Menu>

              <MenuItem onClick={handorderopen}>Order</MenuItem>
              <Menu
                anchorEl={order}
                open={Boolean(order)}
                onClose={handlorderclose}
              >
                <MenuItem>Online</MenuItem>
                <MenuItem>Offline</MenuItem>
              </Menu>

              <MenuItem>Conteact</MenuItem>
              <MenuItem>Login</MenuItem>
            </Menu>
          </Box>

          <Typography variant="h5" flexGrow={1}>
            Material Ui
          </Typography>

          <Box sx={{display:{xs:"none" , md:"flex"}}}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit" onClick={handlmenuopen}>
            Menu
          </Button>
          <Menu anchorEl={menu} open={Boolean(menu)} onClose={handlmenucloase}>
            <MenuItem onClick={handlmenucloase}>Chines</MenuItem>
            <MenuItem onClick={handlmenucloase}>Punjabi</MenuItem>
            <MenuItem onClick={handlmenucloase}>FastFood</MenuItem>
            <MenuItem onClick={handlmenucloase}>SouthIndian</MenuItem>
            <MenuItem onClick={handlmenucloase}>Gujrati</MenuItem>
          </Menu>
          <Button color="inherit" onClick={handorderopen}>
            Order
          </Button>
          <Menu
            anchorEl={order}
            open={Boolean(order)}
            onClose={handlorderclose}
          >
            <MenuItem>Online</MenuItem>
            <MenuItem>Offline</MenuItem>
          </Menu>
          <Button color="inherit">Contect</Button>
          <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
