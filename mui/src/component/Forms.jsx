import { CheckBox } from "@mui/icons-material";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";

export default function Forms() {
  const [form, setform] = useState({
    Name: "",
    email: "",
    gendar: "",
    cource: "",
    language: [],
  });
  const handlname = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    console.log(form.Name);
  };
  const handlemail = (e) => {
    setform({ ...form, [e.target.email]: e.target.value });

    console.log(e.target.value);
  };

  const handlgender = (e) => {
    setform({ ...form, [e.target.gendar]: e.target.value });
    console.log(e.target.value);
  };

  const handlecource = (e) => {
    setform({ ...form, [e.target.cource]: e.target.value });
    console.log(e.target.value);
  };
  const handlecheck = (e) => {
    const { name, checked, value } = e.target;

    setform((prev) => {
      let update = checked
        ? [...prev[name], value]
        : prev.language.filter((v) => v !== value);

      console.log(update);

      return { ...prev, [name]: update };
    });
  };

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <form>
              <Typography variant="h5">Ragister Form</Typography>

              {/* Name Field */}
              <TextField
                label="Enter Your Name"
                sx={{ mt: 2 }}
                name="Name"
                variant="outlined"
                value={form.Name}
                onChange={handlname}
                required
              />
              <br />
              {/* Email  Field */}
              <TextField
                label="Enter Your Email"
                sx={{ mt: 2 }}
                name="email"
                variant="outlined"
                value={form.email}
                onChange={handlemail}
                required
              />
              <br />
              {/* Radio Group Gender */}

              <FormControl sx={{ mt: 1 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FormLabel style={{ marginRight: "12px" }}>Gender</FormLabel>
                  <RadioGroup
                    row
                    value={form.gendar}
                    onChange={handlgender}
                    name="gendar"
                  >
                    <FormControlLabel
                      label="Male"
                      control={<Radio color="secondary" />}
                      value={"Male"}
                    />
                    <FormControlLabel
                      label="Female"
                      control={<Radio color="success" />}
                      value={"Female"}
                    />
                  </RadioGroup>
                </div>
              </FormControl>
              <br />

              <FormControl style={{ minWidth: "225px" }}>
                <InputLabel id="Cource">Select The Cource</InputLabel>
                <Select
                  labelId="Cource"
                  label="Select The Cource"
                  value={form.cource}
                  onChange={handlecource}
                  name="cource"
                >
                  <MenuItem value="Java">Jave</MenuItem>
                  <MenuItem value="Python">Python</MenuItem>
                  <MenuItem value="Php">Php</MenuItem>
                </Select>
              </FormControl>

              <br />
              <FormControl>
                <div>
                  <FormLabel>Language</FormLabel>
                  <FormControlLabel
                    label="Hindi"
                    control={
                      <Checkbox
                        color="primary"
                        value="Hindi"
                        onChange={handlecheck}
                        name="language"
                        checked={form.language.includes("Hindi")}
                      />
                    }
                  />
                  <FormControlLabel
                    label="English"
                    control={
                      <Checkbox
                        color="primary"
                        value="English"
                        onChange={handlecheck}
                        name="language"
                        checked={form.language.includes("English")}
                      />
                    }
                  />
                </div>
              </FormControl>
              <br />
              <Button variant="outlined">Submit</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
