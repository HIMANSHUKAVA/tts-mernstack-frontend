import React from 'react'
import Flow from '../Flow'
import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Flow/>
      <Toolbar/>
          <Box  sx={{ml:"190px", p: 3}}>
            <h1>Welcome This Is Home Page</h1>
          
          <Outlet/>
          </Box>
    </div>
  )
}
