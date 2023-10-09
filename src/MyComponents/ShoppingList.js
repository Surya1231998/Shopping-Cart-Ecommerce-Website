import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
import Product from './Product';

export const ShoppingList = () => {

  const [myData, setMyData] = useState([]);
  

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => (setMyData(res.data.products)));



  }, []);

  return (
    <>
      <h1>ShoppingList</h1>
      <div className="grid">
        {
          myData.map((post) => {
          console.log(post);
            return(
            <Product arrOfObject= {post}></Product>
            )
          })
        }

      </div>
    </>
  );
}

export default ShoppingList
