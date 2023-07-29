import React, { useState,useEffect } from "react";
import { Products } from "./features/products/Products";
import "./App.css";
import { Cart } from "./features/cart/Cart";
import {useSelector,useDispatch} from 'react-redux'
import { fetchAsync } from "./features/cart/cartSlice";


function App() {
  //to load the products globally
  const dispatch=useDispatch()
  const [showCart,setShowCart]=useState(false)
  const items = useSelector((state) => state.cart.items);
  useEffect(() => {
    dispatch(fetchAsync());
  }, []);
  return (
    <div className="App">
      <button onClick={()=>setShowCart(!showCart)}>Cart [{items.length}]</button>
     {showCart ? <Cart />: <Products />}  
    </div>
  );
}

export default App;
