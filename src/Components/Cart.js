import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Cart = () => {
  const { cartItems  , handleRemoveCart} = useContext(DataContext);


  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },[])


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
                    <button>+</button>
                    <h3>5</h3>
                    <button>-</button>
                  </div>
                  <button onClick={() => handleRemoveCart(item.id)}>Remove from Cart</button>
                  <button>Move to Wishlist</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 ?
        <div className="price_details">
        <h2>Price details</h2>
        <hr />
        <div className="price_details_list">
          <p>Price</p>
          <p>2000</p>
        </div>
        <div className="price_details_list">
          <p>Discount</p>
          <p>-1000</p>
        </div>
        <div className="price_details_list">
          <p>Delivery Charges</p>
          <p>499</p>
        </div>
        <hr />
        <div className="price_details_list">
          <h3>Total Amount</h3>
          <p>2498</p>
        </div>
        <hr/>
        <p>You will save 1000 on this order</p>
        <button className="price_details_list_btn">Place order</button>
      </div> : ""}
    </div>
  );
};

export default Cart;
