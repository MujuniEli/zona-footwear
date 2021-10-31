import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Card({data}) {
    const { removeFromCart } = useContext(CartContext);
    const deleteProduct = () => {
      removeFromCart(data);
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

        <div>
          <span>Shs:{data.price}</span>
          <button Id="rmBtn" onClick={deleteProduct}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
