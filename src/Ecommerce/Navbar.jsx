import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Box, Text } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <div style={{width:"100%",background:"black",color:"white",height:"50px"}}>
       {/* <Box> */}
        <Link to="/" style={{color:"white",padding:"10px 50px"}}>Home</Link>
        <Link to="/products" style={{color:"white",padding:"10px 50px"}}>Product</Link>
        <Link to="/addtocart" style={{color:"white",padding:"10px 50px"}}>Add to cart</Link>
       {/* </Box> */}
    </div>
  )
}
export default Navbar;
