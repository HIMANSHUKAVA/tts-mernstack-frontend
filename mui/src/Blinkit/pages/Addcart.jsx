import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Flow from '../Flow';
import { Box, Button, Container, Toolbar } from '@mui/material';
import Swal from 'sweetalert2';

export default function Addcart() {
  const [product, setcart] = useState(null)
  const {id} = useParams();
  useEffect(() => {
    
    axios.get(`http://localhost:8080/view/${id}`).then((Response)=>{
      setcart(Response.data)
    })

  }, [])
  

  const handlecart=()=>{

     const formdeta = new FormData();
     formdeta.append('name' , product.name);
     formdeta.append('price' , product.price);
     formdeta.append('detail' , product.detail);
     
     const bytearraay =  atob(product.photo);
     const bytenumber =  new Array(bytearraay.length);
      for(let i=0; i<bytearraay.length; i++){
        bytenumber[i] = bytearraay.charCodeAt(i);
      }
      const  byteArray =  new Uint8Array(bytenumber);

      const photoblob = new Blob([byteArray] , {type:'image/jpeg'});
      formdeta.append('photo' , photoblob);

    axios
    .post(`http://localhost:8080/add-cart`, formdeta)
      .then(()=>{

        Swal.fire({
          icon: "success",
          title: "Added to Cart!",
          text: `${product.name} added successfully.`,
          timer: 2000,
          showConfirmButton: false
        });
      })
      .catch((error)=>{
        console.error('There was an error!', error);
      });
    }
  return (
    <>
    
    <Flow/>
    <Toolbar/>
     <Box sx={{ml:'290px',p:2}}>
    {product && (
      <div>
        <img src={`data:image/jpeg;base64,${product.photo}`} alt={product.name} height="200" /> 
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>
        <p>{product.detail}</p>
        <Button variant="contained" color="primary"  onClick={handlecart}>Add Cart</Button>
      </div>
    )}      
      </Box>
    </>
  )
  } 
