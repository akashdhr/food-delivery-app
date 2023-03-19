import React from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {

    const addItemToCartHandler = () => {}

    const removeItemFromCartHandler = (props) => {}
    const cartContext = {
        items:[],
        totalAmount: 0,
        addItem: (item) => {},
        removeItem: (item) => {}
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider