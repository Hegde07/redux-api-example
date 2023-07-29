import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { deleteAsync,updateAsync } from "./cartSlice";


export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

const handleChange=(e,id)=>{
console.log(e.target.value)
dispatch(updateAsync({id,change:{quantity:+e.target.value}}));
}

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="cart-item">
            <img className="img-fluid" src={item.thumbnail} alt="img" />
            <div className="description">
              <p>{item.title}</p>
              <p>{item.brand}</p>
              <strong>${item.price}</strong>
            </div>
            <div className="quantity">
              Quantity
              <select value={item.quantity} onChange={(e)=>handleChange(e,item.id)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className="close">
              <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
            </div>
          </div>
        );
      })}
     <h3>Total:{items.reduce((acc,item)=>item.price*item.quantity+acc,0)}</h3>
      
    </div>
  );
}
