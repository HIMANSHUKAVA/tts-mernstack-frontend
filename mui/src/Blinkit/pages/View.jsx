import axios from "axios";
import React, { useEffect, useState } from "react";
import Flow from "../Flow";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function View() {
  const [product, setfirst] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/view`).then((Response) => {
      setfirst(Response.data);
    });
  }, []);

  return (
    <>
      <Flow />
      <Toolbar />
      <Container>
        <Box sx={{ ml: "190px", p: 1 }}>
          <Typography
            variant="h4"
            sx={{ color: "skyblue", display: "flex", justifyContent: "center" }}
          >
            Prodcuts List
          </Typography>

          <Grid container spacing={2}>
            {product.map((p, index) => (
              <Grid item xs={3} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    image={`data:image/jpeg;base64,${p.photo}`}
                    alt={p.name}
                    height="200"
                  />
                  <CardContent>
                    <Typography variant="h6">{p.name}</Typography>
                    <Typography>₹{p.price}</Typography>
                    <Typography>{p.detail}</Typography>
                    <Button
                      variant="contained"
                      sx={{color: "black", mr: 1 }}
                      component={Link}
                      to={`/add-to-cart/${p.id}`}
                    >

                      Add To Cart
                    </Button>
                    <Button
                      variant="contained"
                      sx={{color: "black" }}
                    >
                      Buy
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
