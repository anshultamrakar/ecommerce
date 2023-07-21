import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import FilterInput from "./FilterInput";
import { toast } from "react-toastify";


const Products = () => {
  const {products  , handleAddToCart , handleWishList , checkboxFilter } = useContext(DataContext)
  
useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
},[])



 const filteredProducts =  checkboxFilter.length > 0 ?  products.filter(item => checkboxFilter.includes(item.categoryName)) : products

  return (
    <div className="Product_list">
      <FilterInput/>
      <div className="product_listItems">
        <h2>
          Showing All Products
          <span className="qty_product">({`Showing ${products.length} products`})</span>
        </h2>
        <ul className="product-items">
          {filteredProducts.map((product) => (
            <li className="product-list" key={product.id}>
             <Link to = {`${product._id}`}><img src={product.img} /></Link> 
              <h4>{product.title}</h4>
              <p> ₹ {product.price}</p>
              <button disabled = {product.isAddedToCart ? true :false} onClick={() => handleAddToCart(product)}>
                {!product.isAddedToCart ? "Add to cart"  : <Link style = {{textDecoration : "none" , color : "#fff"}} to = "/cart">Go to cart</Link> }
              </button>
              <div className="like-wishlist">
                <div onClick={() => handleWishList(product)} className="wishlist-button">
                {!product.isAddedToWish ? <AiOutlineHeart /> : <AiFillHeart color = "red"/> }
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
