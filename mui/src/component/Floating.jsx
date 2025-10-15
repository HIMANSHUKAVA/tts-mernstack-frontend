import React from 'react'
import { Fab } from '@mui/material'
import { Edit , Shop } from '@mui/icons-material';
import NavigationIcon from '@mui/icons-material/Navigation';
export default function Floating() {
  return (
    <>
    
    <Fab
    color='primary'
    size='small'
     
    >
     <Edit/>
    </Fab>

 <Fab variant='extended'>
    
    <NavigationIcon sx={{mr:1}}/>
    Navigetion
      </Fab>
    
    </>
  )
}
