import React, { useContext } from "react";
import Card from '../components/Card'
import { CartContext } from "../context/CartContext";


function Cart() {
    const { cartData } = useContext(CartContext);
    return (
        <div className="store" style={{ paddingTop: '85px' }}>
            {cartData &&
                cartData.map(product =>(
                    <div key={product.id}>
                        <Card data={product}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart
