import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer } from 'react-toastify';
import { DataContext } from "../Context/DataContext";

const Products = () => {
  let {categoryId} = useParams()
  
  const {products , isLoading , handleAddToCart , handleWishList , setProducts , categories } = useContext(DataContext)
  const [categoryValue , setCategoryValue] = useState("")
 

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },[])


  console.log(categoryValue)
  return (
    <div className="Product_list">
      <aside>
        <div className="filter_heading">
          <h2>Filters</h2>
          <h4 style = {{textDecoration : "underline"}}>Clear</h4>
        </div>
        <div className="filter_price">
          <h4>Price</h4>
          <input type="range" min="50" max="100" />
        </div>
        <div className="filter_category">
          <h4>Category</h4>
          <div className="filter_inputs">
          <input type="checkbox" id="sofas"  value= {categoryValue} onChange = {() => setCategoryValue("sofas")} />
          <label htmlFor="sofas">Sofas</label>
          </div>
          <div className="filter_inputs">
          <input type="checkbox" id="beds"  value= {categoryValue} onChange={() => setCategoryValue("beds")} />
          <label htmlFor="beds">Beds</label>
          </div>
          <div className="filter_inputs">
          <input type="checkbox" id="tables"  value= {categoryValue} onChange={() => setCategoryValue("tables")} />
          <label htmlFor="tables">Tables</label>
          </div>
          <div className="filter_inputs">
          <input type="checkbox" id="dinning" value= {categoryValue} onChange={() => setCategoryValue("dinning")} />
          <label  htmlFor="dinning">Dining Table</label>
          </div>
        </div>
        <div className="filter_ratings">
          <h4>Rating</h4>
          <div className="filter_inputs">
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">4 Star & above </label>
          </div>
          <div className="filter_inputs">
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label for="css">3 Star & above</label>
          </div>
         <div className="filter_inputs">
         <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label for="javascript">2 Star & above</label>
         </div>
          <div className="filter_inputs">
          <input type="radio" id="javascript" name="fav_language" value="PHP" />
          <label for="javascript">1 Start & above</label>
          </div>
        </div>
        <div className="filter_sort">
          <h4>Sort By</h4>
          <div className="filter_inputs">
          <input
            type="radio"
            id="lowHigh"
          />
          <label htmlFor="lowHigh">Price - Low to High</label>
          </div>
      
          <div className="filter_inputs">
          <input type="radio" id="javascript" name="fav_language" value="PHP" />
          <label for="javascript">Price - High to low</label>
          </div>
       
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
