import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Flow from "../Flow";
import axios from "axios";
import Swal from "sweetalert2";

export default function Addproduct() {
  const [form, setform] = useState({
    name: "",
    price: "",
    detail: "",
    photo: "",
  });

  const handlnamedeta = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    setform({
      ...form,
      photo: e.target.files[0], // file object
    });
  };

  const handlsubmit = (e) => {
e.preventDefault(); 

const formData = new FormData();
  formData.append("name", form.name);
  formData.append("price", form.price);
  formData.append("detail", form.detail);
  formData.append("photo", form.photo);

    axios.post(`http://localhost:8080/add`, formData).then((Response) => {
      console.log("data saved", Response.data);

      Swal.fire({
        icon: "success",
        title: "Your Product Has Been Saved",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          container: "swal-overlay",
        },
      });
    });

     setform({
  name: "",
  price: "",
  detail: "",
  photo: "",
});

  
  };
  return (
    <>
      <Flow />
      <Toolbar />
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{ ml: "190px", p: 3 }}>
              <Typography variant="h3" color="initial">
                Add product
              </Typography>

              <form onSubmit={handlsubmit}>
                <TextField
                  label="Enter The Product Name"
                  id="name"
                  fullWidth
                  name="name"
                  variant="outlined"
                  sx={{ mt: 2 }}
                  value={form.name}
                  onChange={handlnamedeta}
                />
                <br />
                <TextField
                  type="number"
                  label="Enter The Product Price"
                  id="price"
                  fullWidth
                  name="price"
                  variant="outlined"
                  sx={{ mt: 2 }}
                  value={form.price}
                  onChange={handlnamedeta}
                />
                <br />
                <TextField
                  multiline
                  label="Enter The Product detail"
                  rows={5}
                  fullWidth
                  id="detail"
                  name="detail"
                  variant="outlined"
                  sx={{ mt: 2 }}
                  value={form.detail}
                  onChange={handlnamedeta}
                />
                <br />

                <input
                  accept="image/*"
                  type="file"
                  id="mui-image-upload"
                  style={{ display: "none" }}
                  name="photo"
                  onChange={handlePhotoChange}
                />
                <label htmlFor="mui-image-upload">
                  <Button
                    variant="contained"
                    fullWidth
                    component="span"
                    sx={{ mt: 2 }}
                  >
                    Choose Image
                  </Button>
                </label>

                <br />
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{ mt: 3 }}
                  
                >
                  Add Product
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
