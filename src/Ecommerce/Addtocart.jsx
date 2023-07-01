import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Addtocart = () => {
  const { id } = useParams();

  const [getallid, setallid] = useState([]);
  const [allpdtdata, setpdt_data] = useState([]);

  useEffect(() => {
    const existingIds = localStorage.getItem("productIds");
    if (existingIds) {
      setallid(JSON.parse(existingIds));
    }

    handleAddToCart();
  }, []);
  
  function removeItemfromcart(){
   let ans= [];
    setpdt_data(ans);
  }

  const handleAddToCart = async () => {
    setallid(prevIds => [...prevIds, id]);
    const fetchAllData = async () => {
      const fetchRequests = getallid.map((productId) =>
        fetch(`https://fakestoreapi.com/products/${productId}`)
      );
      const responses = await Promise.all(fetchRequests);
      const jsonData = await Promise.all(responses.map((response) => response.json()));
      return jsonData;
    };

    const productsData = await fetchAllData();
    setpdt_data(productsData);
    console.log(allpdtdata);
  };

  return (
    <div >
      <button onClick={handleAddToCart}>Show Cart Details</button>
      {allpdtdata.length == 0 ? <div><h1>"cart is empty"</h1> </div>: allpdtdata.map((product, index) => (
        <div key={index} style={{height:"250px",width:"250px"}}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <img src={product.image} alt={product.title} height="100px" width="100px" />
          <br />
          <button onClick={()=>removeItemfromcart(index)}>Remove Cart</button>
        </div>
      ))}   
    </div>
  );
};
