import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function ProdCard({data}) {
  const navigate = useNavigate();
    const { cartData, addToCart, removeFromCart } = useContext(CartContext); 

    const goToProduct = () => {
      navigate(`/product/${data.id}`)
    }
    const addProduct = () => {
      addToCart(data);
    };

    const deleteProduct = () => {
      removeFromCart(data);
    };

    const checkCart = (prodId) => {
      return cartData.some(function(prod) {
        return prod.id === prodId;
      });
    }
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: '10px 0px' }}>
      <CardActionArea onClick={goToProduct}>
        <CardMedia
          component="img"
          height="220"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.product}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {checkCart(data.id)?
          <Button variant="outlined" size="medium" color="error" onClick={deleteProduct}>Remove</Button>
        :            
          <Button variant="outlined" size="medium" color="success" onClick={addProduct}>Add to Cart</Button>
        }
      </CardActions>
    </Card>
  );
}

export default ProdCard;
