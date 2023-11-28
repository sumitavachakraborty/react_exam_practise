import React,{useContext} from 'react'
import { CartContext } from '../context/cart';

const Item = ({name,price}) => {
  const cart = useContext(CartContext);
  console.log(cart);

  return (
    <div className="item-container">
    
    <div className="item-card" >
      <li>{name}</li>
      <li>Price : {price}</li>
      <button onClick={()=>{
        const existingItem = cart.items.find(item => item.name === name);
        
        if (!existingItem) {
          cart.setItems([...cart.items, { name: name, price: price }]);
        } else {
          alert('Item already exists in the cart.');
        }

      }}>Add to cart</button>
    </div>
    </div>
  )
}

export default Item;