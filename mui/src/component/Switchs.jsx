import React, { useState } from 'react'
import Switch from '@mui/material/Switch';

export default function Switchs() {
  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    setChecked(e.target.checked);   
    console.log("Switch State:", e.target.checked); 
  }

  return (
    <>
      <Switch 
        checked={checked}       
        onChange={handleChecked}
      />
      <p>{checked ? "Switch ON है" : "Switch OFF है"}</p>
    </>
  )
}

