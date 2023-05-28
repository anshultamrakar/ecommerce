import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer } from 'react-toastify';
import { DataContext } from "../Context/DataContext";

const Products = () => {
  const {products , isLoading , handleAddToCart , handleWishList } = useContext(DataContext)
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
  },[])

  return (
    <div className="Product_list">
      <aside>
        <div className="filter_heading">
          <h2>Filters</h2>
          <p>Clear</p>
        </div>
        <div>
          <h4>Price</h4>
          <input type="range" id="volume" name="volume" min="0" max="11" />
        </div>
        <div>
          <h4>Category</h4>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> I have a bike</label>
          <br />
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label for="vehicle2"> I have a car</label>
          <br />
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <label for="vehicle3"> I have a boat</label>
          <br />
        </div>
        <div>
          <h4>Rating</h4>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">HTML</label>
          <br />
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label for="css">CSS</label>
          <br />
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label for="javascript">JavaScript</label>
          <br />
          <input type="radio" id="javascript" name="fav_language" value="PHP" />
          <label for="javascript">PHP</label>
        </div>
        <div>
          <h4>Sort By</h4>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label for="javascript">Price - Low to High</label>
          <br />
          <input type="radio" id="javascript" name="fav_language" value="PHP" />
          <label for="javascript">Price - High to low</label>
        </div>
      </aside>
      <div className="product_listItems">
        <h2>
          Showing All Products{" "}
          <span className="qty_product">({`Showing ${products.length} products`})</span>
        </h2>
        <ul className="product-items">
          {isLoading ? <p>Loading.......</p> :products.map((product) => (
            <li className="product-list" key={product._id}>
             <Link to = {`${product._id}`}><img src={product.img} /></Link> 
              <h4>{product.title}</h4>
              <p> ₹ {product.price}</p>
              <button disabled = {product.isAddedToCart ? true :false} onClick={() => handleAddToCart(product.id)}>
                {!product.isAddedToCart ? "Add to cart"  : <Link style = {{textDecoration : "none" , color : "#fff"}} to = "/cart">Go to cart</Link> }
              </button>
              <div  className="like-wishlist">
                <div onClick={() => handleWishList(product.id)} className="wishlist-button">
                { !product.isAddedToWish ? <AiOutlineHeart /> : <AiFillHeart/> }
              <ToastContainer/>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
