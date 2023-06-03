import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer } from 'react-toastify';
import { DataContext } from "../Context/DataContext";

const categoryInput = ['Sofas' , "Bed" , "Tables" , "Chairs" , "Wardrobe" , "Dinning Table"]

const Products = () => {
  const {products , isLoading , handleAddToCart , handleWishList  , selectedOption , setSelectedOption , checkboxFilter , setCheckBoxFilter } = useContext(DataContext)


  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },[])



  const handleCheckboxInput = (e) => {
   const {checked , value} = e.target
   if(checked){
    setCheckBoxFilter([...checkboxFilter , value])
   }else{
    const filterByCategory = checkboxFilter.filter(item => item !== value)
    setCheckBoxFilter(filterByCategory)
   }
  }

  
  const filteredProducts =  checkboxFilter.length > 0 ?  products.filter(item => checkboxFilter.includes(item.categoryName)) : products
  

  return (
    <div className="Product_list">
      <aside>
        <div className="filter_heading">
          <h2>Filters</h2>
          <h4 style = {{textDecoration : "underline"}}>Clear</h4>
        </div>
        <div className="filter_price">
          <h4>Price</h4>
          <input type="range" min="2999" max="55000"  onChange={(e) => console.log(e.target.value)} />
        </div>
        <div className="filter_category">
          <h4>Category</h4>
          {categoryInput.map(item => (
              <div className="filter_inputs">
              <input type="checkbox" id= {item}  value = {item} onChange={handleCheckboxInput} />
              <label htmlFor= {item}>{item}</label>
              </div>
            ))
          }
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
            value = "option1" checked = { selectedOption === "option1"} onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="lowHigh">Price - Low to High</label>
          </div>
          <div className="filter_inputs">
          <input type="radio" id="HighLow"  value = "option2" checked = { selectedOption === "option2"} onChange={(e) => setSelectedOption(e.target.value)}/>
          <label htmlFor="HighLow">Price - High to low</label>
          </div>
        </div>
      </aside>
      <div className="product_listItems">
        <h2>
          Showing All Products{" "}
          <span className="qty_product">({`Showing ${products.length} products`})</span>
        </h2>
        <ul className="product-items">
          {isLoading ? <p>Loading.......</p> : filteredProducts.map((product) => (
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
              </div>
              </div>
            </li>
           ))
           }
        </ul>
      </div>
    </div>
  );
};

export default Products;
