import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Lists() {
  return (
    <>
    <List>
      <ListItem>
        <ListItemIcon><AccountCircleIcon color='secondary'/></ListItemIcon>
        <ListItemText primary="Profile"/>
      </ListItem>

     <ListItem>
      <ListItemIcon><SettingsIcon color='success'/></ListItemIcon>
      <ListItemText primary="Setting"/>
     </ListItem>

     <Divider/>
     <ListItem>
      <ListItemIcon><NotificationsIcon color='warning'/></ListItemIcon>
      <ListItemText primary="Notification"/>
     </ListItem>
     <ListItem>
      <ListItemIcon><LogoutIcon color='info'/></ListItemIcon>
      <ListItemText primary="Logout"/>
     </ListItem>
    </List>
    </>
  );
}
