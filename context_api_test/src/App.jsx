import { useState } from 'react'
import './App.css'
import Item from './Components/Item'
import Cart from './Components/Cart'

function App() {

  return (
    <>
      <h2>Products:</h2>
      <div className="card">
        <Item name="Macbook" price={1299}/>
        <Item name="i-phone" price={899}/>
        <Item name="poco-f1" price={300}/>
        <Item name="airpod" price={499}/>
        <Item name="i-pad" price={799}/>
      </div>
      <h2>Cart:</h2>
      <div>
        <Cart/>
      </div>
    </>
  )
}

export default App
