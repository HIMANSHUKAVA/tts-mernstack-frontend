import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function Tables() {
  const [rows, setrows] = useState([
    {
      id: 1,
      Name: "Himanshu",
      Email: "himanshu@gmail.com",
      Address: "palitana",
    },

    {
      id: 2,
      Name: "Sushil",
      Email: "sushil@gmail.com",
      Address: "Rakot",
    },

    {
      id: 3,
      Name: "Kiran",
      Email: "kiran@gmail.com",
      Address: "Ahemdabad",
    },

    {
      id: 4,
      Name: "dheny",
      Email: "dheny@gmail.com",
      Address: "Bhavnagar",
    },

    {
      id: 5,
      Name: "Kinajl",
      Email: "Kinjal@gmail.com",
      Address: "palnpur",
    },

    {
      id: 6,
      Name: "Mayur",
      Email: "mayur@gmail.com",
      Address: "Botad",
    },

    {
      id: 7,
      Name: "Soham",
      Email: "Soham@gmail.com",
      Address: "Pune",
    },

    {
      id: 8,
      Name: "Pooja",
      Email: "pooja@gmail.com",
      Address: "Mahua",
    },

    {
      id: 9,
      Name: "Aastha",
      Email: "Astha@gmail.com",
      Address: "Palitana",
    },

    {
      id: 10,
      Name: "Om",
      Email: "om@gmail.com",
      Address: "Bhavnagar",
    },

    {
      id: 11,
      Name: "Shivam",
      Email: "shivam@gmail.com",
      Address: "Ahembdabad",
    },

    {
      id: 12,
      Name: "Vivek",
      Email: "vivek@gmail.com",
      Address: "Amreli",
    },
  ]);

  const [order, setorder] = useState("asc");

const handlsort = (Name) => {
  const sorting = [...rows].sort((a, b) => {
    if (order === "asc") {
      return a[Name] < b[Name] ? -1 : 1;
    } else {
      return a[Name] > b[Name] ? -1 : 1;
    }
  });

  setrows(sorting);
  setorder(order === "asc" ? "desc" : "asc");
};


  const [fileter, setfilter] = useState("");
  //    page count mate no stack
  const [page, setpage] = useState(0);

  //   ek page me ketla deta show karva teno state

  const [rowperpage, setrowperpage] = useState(3);

  const handlepage = (e, newpage) => {
    setpage(newpage);
  };
  const handlechange = (e) => {
    setrowperpage(e.target.value);
    setpage(0);
  };
  return (
    <>
      <TextField
        variant="outlined"
        label="Serch Here"
        fullWidth
        value={fileter}
        onChange={(e) => setfilter(e.target.value)}
      ></TextField>
      <TableContainer component={Paper} sx={{ mt: 9 }}>
        <Table>
          <TableHead style={{position:"sticky"}}>
            <TableRow>
              <TableCell onClick={() => handlsort("Id")}>Id</TableCell>
              <TableCell onClick={() => handlsort("Name")}>Name</TableCell>
              <TableCell onClick={() => handlsort("Email")}>Email</TableCell>
              <TableCell onClick={() => handlsort("Address")}>
                Address
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowperpage, page * rowperpage + rowperpage)
              .filter((row) =>
                row.Name.toLowerCase().includes(fileter.toLowerCase()) || 
                row.Email.toLowerCase().includes(fileter.toLowerCase()) ||
                row.Address.toLowerCase().includes(fileter.toLowerCase())
                 
              )
              .map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:hover": { backgroundColor: index%2==0 ? "white" : "#f5f5f5" } }}
                >
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.Name}</TableCell>
                  <TableCell>{item.Email}</TableCell>
                  <TableCell>{item.Address}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          count={rows.length}
          page={page}
          onPageChange={handlepage}
          onRowsPerPageChange={handlechange}
          rowsPerPageOptions={[2, 4, 5]}
        />
      </TableContainer>
    </>
  );
}
