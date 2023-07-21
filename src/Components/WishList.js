import React from 'react'
import axios from 'axios';
import { useContext , useEffect  , useState } from 'react'
import { DataContext } from '../Context/DataContext'
import { AiOutlineHeart, AiFillHeart ,AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


const WishList = () => {
  const {wishItems , handleRemoveWishlist , handleAddToCart  , getWishListItem}  = useContext(DataContext)

console.log(wishItems)
  return (
    <div className='wishlist'>
      <h2>My WishList</h2>
      <br/>
      {wishItems.length === 0 ? <h1>Your Wishlist is empty</h1> :
        <ul className="product-items">
        {wishItems.map(item => (
          <li style={{marginTop : "50px"}} className="product-list" key={item.id}>
             <img src={item.img} />
              <h4>{item.title}</h4>
              <p> ₹ {item.price}</p>
              <button onClick = {() => handleAddToCart(item.id)}>
               {/* {item.isAddedToWish ? <Link style = {{textDecoration : "none" , color : "#fff"}} onClick = {() => handleAddToCart(item.id)}to = "/cart">Move to Cart</Link> : "" }  */}
                {!item.isAddedToWish ? "Go to cart" : "Move to Cart" }
              </button>
              <div  className="like-wishlist">
                <div onClick={() => handleRemoveWishlist(item._id)} className="wishlist-button">
                 <AiFillDelete /> 
              </div>
              </div>
          </li>
        ))}
      </ul>
      }
    
    </div>
  )
}

export default WishList
