import React, { useState, useEffect } from 'react';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (searchTerm) {
      fetchProduct();
    } else {
      setProduct(null);
    }
  }, [searchTerm]);

  useEffect(() => {
    return () => {
      // Cleanup function
      setProduct(null);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" style={{
        height:"30px",
        width:"350px",
      }} value={searchTerm} onChange={handleSearchChange} placeholder="Search for a product" />

      {product ? (
        <div>
          {
            product.meals.map((e)=>{
              return(
                <div>
                  <h2>{e.strMeal}</h2>
                  </div>
              )
            })
          }
        </div>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
};

export default ProductSearch;
