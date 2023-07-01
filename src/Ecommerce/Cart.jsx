import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cart = () => {
  const { id } = useParams();

  let cart = JSON.parse(localStorage.getItem("cart"));
  let products = JSON.parse(localStorage.getItem("products"));
//   console.log(products);

  useEffect(() => {
    addtocart(id);
  }, [id]);
  
  function addtocart(productid) {
    let product = products.find(function (product) {
        return product.id != productid;
    });

    // cart.push(product);

    if (cart.length == 0) {
      cart.push(product);
    } 
    
    // else{
    //     let res = cart.find(element => element.id == productid);
    //     if(res == undefined){
    //         cart.push(product);
    //         console.log(cart);
    //     }
    // }
        localStorage.setItem("cart", JSON.stringify(cart));
  }

  return <div>Cart</div>;
};

export default Cart;
