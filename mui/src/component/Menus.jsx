import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Accountcircle from "@mui/icons-material/AccountCircle";
export default function Menus() {
  const [open, setopen] = useState(null);

  const handlopen = (e) => {
    setopen(e.currentTarget);
  };

  const handlclose = () => {
    setopen(null);
  };
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" flexGrow={1}>
            Material Ui
          </Typography>
          <Button
            color="inherit"
            startIcon={<Accountcircle />}
            onMouseEnter={handlopen}
          >
            Account
          </Button>
          <Menu
            anchorEl={open}
            onClose={handlclose}
            open={Boolean(open)}
            MenuListProps={{
              onMouseEnter: handlopen,
              onMouseLeave: handlclose,
            }}
          >
            <MenuItem onClick={handlclose}>Login</MenuItem>
            <MenuItem onClick={handlclose}>Ragister</MenuItem>
            <MenuItem onClick={handlclose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
