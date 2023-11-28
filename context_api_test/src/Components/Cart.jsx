import React, { useContext } from 'react'
import { CartContext } from '../context/cart'

const Cart = () => {
  const cart = useContext(CartContext);

  const price = cart.items.reduce((a,b) => a+b.price,0)
  return (
    <div className="cart" >
      {cart && cart.items.map((item) => (
        <li>{item.name}: {item.price} </li>
      ))}
      <h3>Total : ${price}</h3>
    </div>
  )
}

export default Cart