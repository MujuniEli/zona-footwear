import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material'
import {data} from "../library/lib"
import { CartContext } from '../context/CartContext'

function Product() {
  const { cartData, addToCart, removeFromCart } = useContext(CartContext)
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

    const checkCart = (prodId) => {
      return cartData.some(function(prod) {
        return prod.id === prodId;
      });
    }

    const addProduct = () => {
      addToCart(productData)
    }

    const deleteProduct = () => {
      removeFromCart(productData);
    };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: '75px' }}>
      
      {dataloaded ? (
        <Grid container style={{ marginTop: "10px", paddingTop: '10px' }}>
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <img
              src={productData.image}
              style={{ width: "100%" }}
              alt={productData.product}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8} style={{ paddingLeft: '10px' }} align="left">
            <Typography variant="h4">
              {productData.product}
            </Typography>
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
            {checkCart(productData.id)?
              <Button variant="outlined" size="medium" color="error" onClick={deleteProduct}>Remove</Button>
            :            
              <Button variant="outlined" size="medium" color="success" onClick={addProduct}>Add to Cart</Button>
            }
          </Grid>
        </Grid>
      ) : (
        "Data Loading..."
      )}
      
    </Grid>
  );
  
}

export default Product;
