import { FormControl, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Textfiel() {
    const [value , setvalue] = useState('');

    const handltext = (e) => {
        setvalue(e.target.value);

        console.log(e.target.value);
        
    }
  return (
    <>
    
    <FormControl>
        <TextField label="Enter The Name" variant='standard' name='s' value={value} onChange={handltext}></TextField>
    </FormControl>
    
    </>
  )
}
