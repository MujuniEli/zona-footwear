import { createContext, useState, useEffect } from "react";


export const CartContext = createContext()

const CartContextProvider = (props) => {
    
    const [cartData, setCartData] = useState([])

    useEffect(() =>{

    }, [])

    const addToCart = (productData) => {
        setCartData(cartData => [...cartData, productData])
    }

    const removeFromCart = (productData) => {
        setCartData(cartData.filter(prod => prod.id !== productData.id))
    }

    return (
        <CartContext.Provider
            value={{
                cartData,
                addToCart,
                removeFromCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
