import React from "react";
import { useEffect , useState } from "react";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Cart = () => {
  const { cartItems  , handleRemoveCart , setCartItems , handleWishList} = useContext(DataContext);
   const [itemPrice , setItemPrice] = useState(0)

   const calculateTotalPrice  = () => {
    const totalprice = cartItems.reduce((acc , value ) => acc + Number(value.price) * value.quantity , 0)
    setItemPrice(totalprice)
   }

  const handleIncrement = (id) => {
   const incrementQty = [...cartItems].map(item => item.id === id ? {...item , quantity : item.quantity + 1} : item)
   setCartItems(incrementQty)
  }


  const handleDecrement = (id) => {
    const decrementQty = cartItems.map(item => item.id === id ? {...item , quantity : item.quantity - 1} : item)
    setCartItems(decrementQty)
  }
 
  useEffect(() => {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    calculateTotalPrice()
  },[cartItems])


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
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                    <h3 style = {{fontSize : "1.5rem"}}>{item.quantity}</h3>
                    <button disabled = {item.quantity === 1 ? true : false}  onClick={() => handleDecrement(item.id)}>-</button>
                  </div>
                  <button  onClick={() => handleRemoveCart(item.id)}>Remove from Cart</button>
                  <button onClick={() => handleWishList(item.id) }>Move to Wishlist</button>
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
          <p> ₹ {itemPrice}</p>
        </div>
        <div className="price_details_list">
          <p>Discount</p>
          <p>₹ -1000</p>
        </div>
        <div className="price_details_list">
          <p>Delivery Charges</p>
          <p> ₹ 499</p>
        </div>
        <hr />
        <div className="price_details_list">
          <h3>Total Amount</h3>
          <p>₹ {itemPrice - 501}</p >
        </div>
        <hr/>
        <p style = {{fontWeight : "bold"}}>You will save ₹ 1000 on this order</p>
        <button className="price_details_list_btn">Place order</button>
      </div> : ""}
    </div>
  );
};

export default Cart;
