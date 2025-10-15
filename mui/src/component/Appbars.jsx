import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Serch from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
export default function Appbar() {
  const [anchoel, setanchoel] = useState(null);
  const [productel, setproductel] = useState(null);
  const handlopen = (e) => {
    setanchoel(e.currentTarget);
  };

  const handlclose = () => {
    setanchoel(null);
  };
  const handlproductopen = (e) => {
    setproductel(e.currentTarget);
  };
  const handlproductclose = () => {
    setproductel(null);
  };
  return (
    <>
      <AppBar>
        <Toolbar>
          {/* Mobail responsive */}

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
            <IconButton onClick={handlopen}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchoel}
              open={Boolean(anchoel)}
              onClose={handlclose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              
            >
              <MenuItem>Home</MenuItem>
              <MenuItem onClick={handlproductopen}>Product</MenuItem>
              <Menu
                anchorEl={productel}
                open={Boolean(productel)}
                onClose={handlproductclose}
              >
                <MenuItem onClick={handlproductclose} >Men</MenuItem>
                <MenuItem onClick={handlproductclose}>Women</MenuItem>
                <MenuItem onClick={handlproductclose}>Kids</MenuItem>
              </Menu>
              <MenuItem>About</MenuItem>
              <MenuItem>Contect</MenuItem>
            </Menu>
          </Box>

          <Typography flexGrow={1} variant={"h6"} id="s1">
            Material Ui
          </Typography>

          <Box
            style={{ alignItems: "center", flexGrow: 1 }}
            sx={{display:{xs:"none"}}}
          >
            <TextField
              style={{
                backgroundColor: "white",
                width: "60%",
                borderRadius: "4px",
              }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Serch />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit" onClick={handlproductopen}>
              Products
            </Button>
            <Menu
              anchorEl={productel}
              open={Boolean(productel)}
              onClose={handlclose}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical:"top", horizontal: "left" }}
              > 
              <MenuItem onClick={handlproductclose}>Men</MenuItem>
              <MenuItem onClick={handlproductclose}>Women</MenuItem>
              <MenuItem onClick={handlproductclose}>Kids</MenuItem>
            </Menu>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contect</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
