import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const handlradio=(e)=>{
  alert("You Are "+ e.target.value);
}
export default function Radios() {
  return (
    <>

<FormControl>
  <div style={{display:"flex", alignItems:"center"}}>
  <FormLabel id='form-radio-label' style={{marginRight:"12px"}}>Select Category</FormLabel>

  <RadioGroup row>
    <FormControlLabel value={'male'} label={"Male"} control={<Radio color='secondary'/>} onChange={handlradio}/>
    <FormControlLabel value={'female'} label={"Female"} control={<Radio color='success'/>} onChange={handlradio}/>
    <FormControlLabel value={'other'} label={"Other"} control={<Radio color='warning'/>} onChange={handlradio}/>
    

  </RadioGroup>
  </div>
</FormControl>
      
   
    </>
  )
}
