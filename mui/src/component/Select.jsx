import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { AddTask, Favorite, FavoriteBorder } from "@mui/icons-material";

export default function Select() {

  const [rating , setrating] =  useState(0);

  const handlrating = (e , Newvalue) => {
    setrating(e.target.Newvalue);
    console.log(Newvalue);
    
  }
  return (
    <>
    <h1>User Rating</h1>
    <Rating icon={<Favorite color='error'/>} size='medium' onChange={handlrating} value={rating}/>   
    </>
  )
}
