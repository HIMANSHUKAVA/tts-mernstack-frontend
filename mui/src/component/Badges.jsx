import { Badge, Button } from '@mui/material'
import React, { useState } from 'react'
import { Mail } from '@mui/icons-material' 
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function Badges() {
  const [count , setcount] = useState(0);
  const handlincre = (e) =>{
    setcount(count+1);
  }

  const handledecre = (e) =>{
    setcount(count-1);
  }
  

  return (
    <>
    {/* <Badge badgeContent={4} color='success' sx={{mt:1 , m:5}} fontSize="large"><Mail color='primary' fontSize='large'/></Badge> */}

        <Badge badgeContent={count} color='success' sx={{mt:1 , m:3}}><Mail color='primary'/></Badge>
        <Button variant='outlined' onClick={handlincre}><AddIcon/></Button>
        <Button variant='outlined'sx={{m:2}} onClick={handledecre}><RemoveIcon/></Button>
        
    </>
  )
}
