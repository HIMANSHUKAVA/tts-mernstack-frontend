import  SpeedDial  from '@mui/material/SpeedDial'
import React from 'react'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { SpeedDialAction } from '@mui/material';
import FiledownloadIcon from '@mui/icons-material/FileDownload'
import AddIcon from '@mui/icons-material/Add'
import SettingIcon from '@mui/icons-material/Settings'
export default function Speeddials() {
  return (
    <>
         <SpeedDial
          icon={<SpeedDialIcon/>}
          sx={{position:"absolute" , right:"30px" ,  mr:10 , bottom:"120px" ,}}
          ariaLabel='speed-dial'
         >

          <SpeedDialAction  icon={<FiledownloadIcon/>} tooltipTitle="Download File"/>
          <SpeedDialAction icon={<AddIcon/>} tooltipTitle="Add" onClick={()=> window.location.href="https://www.google.com/"}/>
          <SpeedDialAction icon={<SettingIcon/>} tooltipTitle="Setting"/>
             
            
        </SpeedDial>    
    </>
  )
}
