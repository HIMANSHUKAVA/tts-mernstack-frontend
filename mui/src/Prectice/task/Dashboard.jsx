import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccoutnCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import ProductIcon from "@mui/icons-material/ShoppingCart";
import PhoneIcon from "@mui/icons-material/Phone";
import Cards from "./Cards";
import Tables from "./Tables";
export default function Dashboard() {
  const [open, setopen] = useState("");

  const [count, setcount] = useState(false);
  const handlopen = (e) => {
    setopen(e.currentTarget);
  };

  const handlproductclose = () => {
    setopen("");
  };

  const handledraopdownopen = (e) => {
    setcount(true);
  };

  return (
    <>
      <AppBar
        style={{ backgroundColor: "white" }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton onClick={handledraopdownopen}>
            <MenuIcon />
          </IconButton>

          {/* navbar */}
          <Typography variant="h4" flexGrow={1} sx={{ color: "black" }}>
            DashBoard
          </Typography>
          <Box>
            <IconButton color="success">
              <NotificationsActiveIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton color="primary" onClick={handlopen}>
              <AccoutnCircleIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Menu
              anchorEl={open}
              open={Boolean(open)}
              onClose={handlproductclose}
            >
              <MenuItem onClick={handlproductclose}>Profile</MenuItem>
              <MenuItem onClick={handlproductclose}>Setting</MenuItem>
              <MenuItem onClick={handlproductclose}>Log-out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={count}
        variant="permanent"
        onClose={() => {
          setcount(false);
        }}
        PaperProps={{
          sx: {
            bgcolor: "#80deea", // ya theme color: "primary.main"
            color: "white", // text color
          },
        }}
      >
        <Toolbar />
        <div style={{ width: 200, padding: 10 }}>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <img src="/images/react.png" style={{ width: "100px" }} />
          </div>
          <List>
            {/*  Button component={Link} to="/" */}
            <ListItem >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add deta" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ProductIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Contect" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AccoutnCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
          </List>
        </div>

        <div
          style={{
            marginTop: "auto",
            justifyContent: "center",
            display: "flex",
            position:"relative",
        
          }}
        >
          <img
            src="/images/computer-boy.jpg"
            alt=""
            style={{ width: "100%" ,  height:"auto" , maxWidth:"220px", objectFit:"contain" , borderRadius:"12px" ,}}
          />
        </div>
      </Drawer>

      <Toolbar />
      <Box sx={{ ml: "170px", p: 6, flexGrow: 1 }}>
        <Cards />
      </Box>
      <Box sx={{ ml: "190px", p: 6, flexGrow: 1 }}>
        <Tables />
      </Box>
    </>
  );
}
