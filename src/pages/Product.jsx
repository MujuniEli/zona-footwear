import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from '@mui/material'
import {data} from "../library/lib"
import { CartContext } from '../context/CartContext'

function Product() {
  const { addToCart } = useContext(CartContext)
    const { productID } = useParams()
    const [dataloaded, setdataloaded] = useState(false)
    const [productData, setProductData] = useState({});

    useEffect(() => {
      setdataloaded(false);
      setProductData(
        data.find((product) => {
          return product.id === parseInt(productID);
        })
      );
      setdataloaded(true);
    }, [productID]);

    const addProduct = () => {
      addToCart(productData)
    }

  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      
      {dataloaded ? (
        <Grid container style={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <img
              src={productData.image}
              style={{ width: "100%" }}
              alt={productData.product}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8} align="left">
            <h3>{productData.product}</h3>
            <Typography variant="h6">
              <strong>Price: </strong>
              {productData.price}
            </Typography>
            <Typography variant="h6">
              <strong>Description: </strong>
              {productData.desc}
            </Typography>
            <Typography variant="h6">
              <strong>Rating: </strong>
              {productData.star}/5
            </Typography>
            <button onClick={addProduct}>Add to Cart</button>
          </Grid>
        </Grid>
      ) : (
        "Data Loading..."
      )}
      
    </Grid>
  );
  
}

export default Product;
