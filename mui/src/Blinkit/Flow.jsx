import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Box,
  Drawer,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import {
  AddCircleRounded,
  Home,
  ListAltOutlined,
  Search,
} from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
export default function Flow() {
  const [drawer, setdrawer] = useState(false);
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" flexGrow={1}>
            Blinkit
          </Typography>

          <Typography variant="h6">Phone : 9601972547</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        open={() => setdrawer(true)}
        onClose={() => setdrawer(false)}
        variant="permanent"
      >
        <div style={{ width: "190px", padding: "10px" }}>
          <Toolbar />
          <Typography variant="h5">Navigetion</Typography>
          <List>
            <ListItem>
              <ListItemButton LinkComponent={Link} to="/home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton LinkComponent={Link} to="/add-product">
                <ListItemIcon>
                  <AddCircleRounded />
                </ListItemIcon>
                <ListItemText primary="Add" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton LinkComponent={Link} to="/view-products">
                <ListItemIcon>
                  <AddCircleRounded />
                </ListItemIcon>
                <ListItemText primary="View Product" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton LinkComponent={Link} to="/addcart">
                <ListItemIcon>
                  <ShoppingCartCheckoutIcon />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
            
          </List>
        </div>
      </Drawer>
    </>
  );
}
