import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";

export default function Togglebutton() {
  const [align, setalign] = useState("java");

  const handlgroup = (e, newalign) => {
    setalign(newalign);
  };

  return (
    <>
      {/* <ToggleButtonGroup exclusive color="primary">

       <ToggleButton  value="left">left</ToggleButton>
       <ToggleButton value="right">right</ToggleButton>
       <ToggleButton value="center">center</ToggleButton>
      </ToggleButtonGroup>

       */}

      <ToggleButtonGroup
       color="primary"
        value={align}
        onChange={handlgroup}
        exclusive
         aria-label="Platform"
        
      >
        <ToggleButton value="java">Java</ToggleButton>
        <ToggleButton value="python" >Python</ToggleButton>
        <ToggleButton value="php" >PhP</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
