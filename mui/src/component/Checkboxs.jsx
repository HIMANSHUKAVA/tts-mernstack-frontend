import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";

import { AddTask, Favorite, FavoriteBorder } from "@mui/icons-material";

export default function Checkboxs() {
  const [data, setdata] = useState([]);
  const handlcheck = (e) => {
    const value = e.target.value;
    setdata([...data, value]);

    console.log(data.join(","));
  };
  return (
    <>
      <div>
        <h1>himanshu</h1>

        <FormControlLabel
          label="himanshu"
          control={
            <Checkbox
              color="primary"
              value={"himanshu"}
              onChange={handlcheck}
              name="language"
            ></Checkbox>
          }
        ></FormControlLabel>

        <FormControlLabel
          label="aarti"
          control={
            <Checkbox
              color="primary"
              value={"aarti"}
              onChange={handlcheck}
              name="language"
            ></Checkbox>
          }
        ></FormControlLabel>

        <FormControlLabel
          label="krishna"
          control={
            <Checkbox
              color="primary"
              value={"krishna"}
              onChange={handlcheck}
            ></Checkbox>
          }
        ></FormControlLabel>
      </div>
    </>
  );
}
