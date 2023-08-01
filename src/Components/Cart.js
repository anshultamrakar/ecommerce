import React from "react";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import PriceDetails from "./PriceDetails";


const Cart = () => {
  const { cartItems  , handleRemoveCart  , handleWishList, handleUpdateQty} = useContext(DataContext);
  

  return (
    <div className="cartItem_layout">
      <div className="cartItems">
        <h2>My CartItems ({cartItems.length})</h2>
        <br />
        {cartItems.length === 0 ? (
          <h1>You Cart is empty</h1>
        ) : (
          <ul className="cartItems_items">
            {cartItems.map((item) => (
              <li className="cartItems_listItems" key={item.id}>
                <img src={item.img} />
                <div className="cartItems_details">
                  <h4>{item.title}</h4>
                  <p> ₹ {item.price}</p>
                  <div className="cartItems_qty">
                    <button  onClick= {() => handleUpdateQty(item._id , "increment" )}>+</button>
                    <h3 style = {{fontSize : "1.5rem"}}>{item.qty}</h3>
                    <button disabled = {item.qty === 1 ? true : false}  onClick= {() => handleUpdateQty(item._id , "decrement")}>-</button>
                  </div>
                  <button onClick={() => handleRemoveCart(item._id)}>Remove from Cart</button>
                  <button onClick={() => handleWishList(item) }>Move to Wishlist</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 ?
        <PriceDetails/> : ""}
    </div>
  );
};

export default Cart;
