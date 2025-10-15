import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'


export default function Select2() {

    const [value , setvalue] = useState('');
    
    const handleselect = (e) => {

        setvalue(e.target.value);

        console.log(e.target.value);
        
    }
  return (
    <>

      <FormControl style={{width:"190px"}}>
        <FormLabel id="cource">Select The Cource</FormLabel>

        <Select id='cource' label="Select The Cource" value={value} onChange={handleselect}>
            <MenuItem value={'java'}>Java</MenuItem>
            <MenuItem value={'python'}>python</MenuItem>
            <MenuItem value={'php'}>php</MenuItem>
            <MenuItem value={'.net'}>.NET</MenuItem>
            
        </Select>
      </FormControl>



    </>
  );
}
