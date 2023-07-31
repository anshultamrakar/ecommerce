import React from 'react'
import { useContext  } from 'react'
import { DataContext } from '../Context/DataContext'
import { AiFillDelete } from "react-icons/ai";



const WishList = () => {
  const {wishItems , handleRemoveWishlist , handleAddToCart }  = useContext(DataContext)

  return (
    <div className='wishlist'>
      <h2>My WishList</h2>
      <br/>
      {wishItems.length === 0 ? <h1>Your Wishlist is empty</h1> :
        <ul className="product-items">
        {wishItems.map(item => (
          <li style={{marginTop : "50px"}} className="product-list" key={item._id}>
             <img src={item.img} />
              <h4>{item.title}</h4>
              <p> ₹ {item.price}</p>
              <button onClick = {() => handleAddToCart(item)}>
                {!item.isAddedToWish ? "Go to cart" : "Move to Cart" }
              </button>
              <div className="like-wishlist">
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
