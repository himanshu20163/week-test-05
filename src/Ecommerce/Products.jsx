import React, { useEffect, useState } from 'react'
import { Box, Container, Card, CardBody, Text, Image } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';

export const Products = () => {

    const [Allproduct, setAllproducts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch_Data();
    }, []);

    fetch(`https://fakestoreapi.com/products`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       localStorage.setItem("products",JSON.stringify(data));
       if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart","[]");
       } 
    })

    async function fetch_Data() {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setAllproducts(data);
    }
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
                Allproduct.map((e,id) => {
                    return (
                        <Container style={{display:"flex",margin:"20px"}}>
                            <Card>
                                <CardBody style={{ border: "2px solid black", width: "250px", height: "300px" }}>
                                    <Text>{e.title}</Text>
                                    <Image src={e.image} height="130px" width="130px"  ></Image>
                                    <br/>
                                    <Link to={`/addtocart/${id}`}><button colorScheme='teal' variant='outline'>
                                        Add to cart
                                    </button></Link>
                                    <button colorScheme='teal' variant='outline'>
                                       View Products
                                    </button>
                                </CardBody>
                            </Card>
                        </Container>
                    )
                })
            }

        </div>
    )
}
