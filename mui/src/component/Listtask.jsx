import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function Listtask(props) {
  return (
    <>

   <List>
    
   {props.deta.map((item , index)=>(

    <ListItem key={index}>
        <ListItemAvatar>
            <Avatar src={item.img}/>
        </ListItemAvatar>
        <ListItemText  primary={item.Message1} secondary ={item.Message2}/>
        <Typography variant='p'>{item.Time}</Typography>
    </ListItem>

   ))}

   </List>

    </>
  )
}
