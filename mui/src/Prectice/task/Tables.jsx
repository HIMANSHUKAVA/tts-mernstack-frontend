import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Tables() {

    const [user, setuser] = useState([]);

    useEffect(() => {
      
        axios
        .get(`http://localhost:5000/list`) 
        .then((Response)=>{
            console.log(Response.data);
            setuser(Response.data)
            
        })
        .catch((error)=>{
            console.log("you have an error" + error);
            
        })
    }, [])
    
    const [order, setorder] = useState("asc");

    const handlesort=(Name)=>{
        const sorting = [...user].sort((a,b)=>{

            if(order==="asc") 
                return a[Name] < b[Name] ? -1:1;
            else
                return a[Name] > b[Name] ? -1:1;
        })

        setuser(sorting);
        setorder(order==="asc" ? "desc" : "asc");
    }

     const [filter, setfilter] = useState("")
    
  return (
    <>
 <TextField  label="Enter The Value" style={{width:"100%"}} sx={{ml:3}} value={filter} onChange={(e)=>{setfilter(e.target.value)}}></TextField>
            <TableContainer sx={{ml:5}}>
               
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell onClick={()=>handlesort("Name")}>Name</TableCell>
                            <TableCell onClick={()=>handlesort("Email")}>Email</TableCell>
                            <TableCell onClick={()=>handlesort("Role")}>Role</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {user
                        .filter((user)=>(
                            user.Name.toLowerCase().includes(filter.toLowerCase()) || 
                            user.Email.toLowerCase().includes(filter.toLocaleLowerCase()) ||
                            user.Role.toLowerCase().includes(filter.toLocaleLowerCase())
                        ))
                        .map((u)=>(
                            <TableRow key={u.id}>
                                <TableCell>{u.id}</TableCell>
                                <TableCell>{u.Name}</TableCell>
                                <TableCell>{u.Email}</TableCell>
                                <TableCell>{u.Role}</TableCell>
                               <TableCell><Button variant='contained'>{u.Status}</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>   
    </>
  )
}
