import { Container, Grid } from "@mui/material";
import React from "react";

export default function Containerandgrid() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={4}></Grid>

        <Grid item xs={4}></Grid>

        <Grid item xs={4}></Grid>
      </Grid>
    </Container>
    
  );
}
