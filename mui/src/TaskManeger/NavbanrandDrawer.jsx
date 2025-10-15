import { AppBar,Box, Button, Drawer, FormControl, FormLabel, IconButton, InputLabel, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography,} from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import MeniIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DeleteIcon from "@mui/icons-material/Delete";
import LabelIcon from "@mui/icons-material/Label";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { AddTask } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Swal from "sweetalert2";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function NavbanrandDrawer() {
  // create state for drawer open and close
  const [drawer, setdrawer] = useState(false);

  const [sdeta, setsdeta] = useState(false);

  // create modal state for add task
  const [count, setcount] = useState(false);

  const [user, setuser] = useState([])
  useEffect(() => {
    
    axios
    .get('http://localhost:5000/tasks')
    .then((Response)=>{
      console.log(Response.date);
      setuser(Response.data)
    })
    .catch((Error)=>{
      console.log("error",Error);
      
    })
  }, [])
  
  //   create the intialstate

  const initialstate = {
    form: {
      task: "",
      date: "",
      hirename: "",
    },
  };

  // create the reducer function

  const reducerfn = (state, action) => {
    switch (action.type) {
      case "Update_Form": {
        return {
          ...state,
          form: { ...state.form, [action.field]: action.value },
        };
      }

      default: {
        return state;
      }
    }
  };
  // create the usereducer

  const [state, dispatch] = useReducer(reducerfn, initialstate);

  const [input, setinput] = useState(0);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ backgroundColor: "#607D8B" }}
      >
        <Toolbar>
          <IconButton
            onClick={() => {
              setdrawer(true);
            }}
          >
            <MeniIcon />
          </IconButton>
          <Typography variant="h5" flexGrow={1}>
            DashBoard
          </Typography>

          <Button
            style={{ backgroundColor: "#D7DF01", color: "black" }}
            sx={{ mr: 1 }}
            onClick={() => {
              setcount(true);
            }}
          >
            TASKS
          </Button>

          {/* modal */}
          <Modal
            open={count}
            onClose={() => {
              setcount(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h5"> Add Task</Typography>
              <div>
                <form>
                  <TextField
                    id="task"
                    name="task"
                    label="Enter The Task"
                    fullWidth
                    sx={{ mt: 1 }}
                    value={state.form.task}
                    onChange={(e) => {
                      dispatch({
                        type: "Update_Form",
                        field: "task",
                        value: e.target.value,
                      });
                    }}
                  />
                  <br />
                  <TextField
                    id="date"
                    type="date"
                    sx={{ mt: 1 }}
                    fullWidth
                    value={state.form.date}
                    onChange={(e) => {
                      dispatch({
                        type: "Update_Form",
                        field: "date",
                        value: e.target.value,
                      });
                    }}
                  />

                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="s1">Select The Hire Name</InputLabel>

                    <Select
                      labelId="s1"
                      label="Select The Hire Name"
                      id="hirename"
                      name="hirename"
                      value={state.form.hirename}
                      onChange={(e) => {
                        dispatch({
                          type: "Update_Form",
                          field: "hirename",
                          value: e.target.value,
                        });
                      }}
                    >
                      <MenuItem value="Himanshu Kava">Himanshu Kava</MenuItem>
                      <MenuItem value="Devarsh Shah">Devarsh Shah</MenuItem>
                      <MenuItem value="Hardik Rathod">Hardik Rathod</MenuItem>
                      <MenuItem value="Shubham Gohil">Shubham Gohil</MenuItem>
                    </Select>
                  </FormControl>

                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 2, mr: 1 }}
                    onClick={() => {
                      axios
                        .post(`http://localhost:5000/task`, state.form)
                        .then((Response) => {
                          console.log("data successfully saved", Response.data);

                          dispatch({
                            type: "Update_Form",
                            field: "task",
                            value: "",
                          });
                          dispatch({
                            type: "Update_Form",
                            field: "date",
                            value: "",
                          });
                          dispatch({
                            type: "Update_Form",
                            field: "hirename",
                            value: "",
                          });

                          Swal.fire({
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500,
                            customClass: {
                              container: "swal-overlay",
                            },
                          });
                        });
                        
                    }}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="outlined"
                    type="reset"
                    color="error"
                    sx={{ mt: 2 }}
                  >
                    Reset
                  </Button>
                </form>
              </div>
            </Box>
          </Modal>

          <Button
            style={{ backgroundColor: "#D7DF01", color: "black" }}
            onClick={() => setsdeta(true)}
          >
            DELETED TASKS
          </Button>

          {/* create model for deleat task */}

          <Modal
            open={sdeta}
            onClose={() => setsdeta(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h5">Deleat Task</Typography>

              <TextField
                id="delete"
                name="delete"
                type="number"
                label="Enter The Task id"
                fullWidth
                sx={{ mt: 2 }}
                onChange={(e) => {
                  setinput(e.target.value);
                }}
              />

              <Button
                variant="outlined"
                color="error"
                sx={{ mt: 2 }}
                onClick={() =>
                  axios
                    .delete(`http://localhost:5000/task/${input}`)
                    .then((Response) => {
                      console.log("Data Deleted", Response.data);

                      setinput("");
                      setsdeta(false);

                      Swal.fire({
                        icon: "success",
                        title: "Task deleted successfully",
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                          container: "swal-overlay", // z-index fix
                        },
                      });
                    })

                    .catch((Error) => {
                      console.log("error", Error);
                      Swal.fire({
                        icon: "error",
                        title: " Failed To Task deleted ",
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                          container: "swal-overlay", // z-index fix
                        },
                      });
                    })
                }
              >
                Delete
              </Button>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>

      <Drawer
        open={drawer}
        onClose={() => {
          setdrawer(false);
        }}
        variant="permanent"
        sx={{display:{md:"block" , xs:"none"}}}
      >
        <Toolbar />
        <div style={{ width: "190px", padding: "5px" }}>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Task Manager
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                {" "}
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="DashBoard" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="All Tasks" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Add Task" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <DoneAllIcon />
              </ListItemIcon>
              <ListItemText primary="Compleat Task" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText>Delete Task</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <HelpOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>
          </List>
        </div>
      </Drawer>

      <Toolbar />
      <Box sx={{ml:{xs:0 , md:"190px"} , p:{md:4,xs:0}}}>
        <Typography variant="h5">Task List</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Task Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>hirename</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {user.map((u)=>(
                <TableRow key={u.id}>
                  <TableCell>{u.id}</TableCell>
                  <TableCell>{u.task}</TableCell>
                  <TableCell>{u.date}</TableCell>
                  <TableCell>{u.hirename}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
