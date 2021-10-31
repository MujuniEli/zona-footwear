import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Card({data}) {
    const { addToCart } = useContext(CartContext);
    const addProduct = () => {
      addToCart(data);
    };
  return (
    <div className="card">
      <div className="card_image">
        <a href={`/product/${data.id}`}>
          <img src={data.image} alt={data.product} height={300} width={300} />
        </a>
        
      </div>
      <div className="card_description">
        <h4>{data.product}</h4>

        <div className="buyBtn">
          <span>Shs:{data.price}</span>
          <button onClick={addProduct}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
