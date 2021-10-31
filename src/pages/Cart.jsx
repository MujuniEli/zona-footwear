import React, { useContext } from "react";
import CartCard from '../components/CartCard'
import { CartContext } from "../context/CartContext";


function Cart() {
    const { cartData } = useContext(CartContext);
    return (
        <div className="store">
            {cartData &&
                cartData.map(product =>(
                    <div key={product.id}>
                        <CartCard data={product}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart
