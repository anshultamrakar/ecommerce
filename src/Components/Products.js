import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const categoryInput = ['Sofas' , "Bed" ,  "Tables" , "Chairs" , "Wardrobe" , "Dinning Table"]
const ratingInput = ["4star" , "3star", "2star", "1star"]
const sortingInput = ["option1" , "option2"]

const Products = () => {
  const {products , setProducts , handleAddToCart , handleWishList , checkboxFilter , setCheckBoxFilter , search , originalProductData , getProductData  } = useContext(DataContext)
  const [sortOption , setSortOption] = useState("option1")
  const [priceVal , setPriceVal] = useState("")
  const [ratingOption , setRatingOption] = useState("")


useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
},[])


const handleClear = () => {
 console.log("hello")
}

const handleRangeInput = (e) => {
setPriceVal(e.target.value)
const filteredProducts = originalProductData.filter((product) =>  originalProductData.price >= parseInt("2600", 10) && product.price <= parseInt("55000", 10));
setProducts(filteredProducts)
}


const handleSorting = (e) => {
setSortOption(e.target.value)
console.log(sortOption)
if(sortOption === "option2"){
  setProducts(originalProductData.sort((a,b) => a.price - b.price))
}
if(sortOption === "option1"){
  setProducts(originalProductData.sort((a,b) => b.price - a.price))
}

}

const handleRatingInput = (e) => {
  const value = e.target.value
  setRatingOption(e.target.value)
  const filterResult = originalProductData.filter(item => item.rating === value)
  setProducts(filterResult)
}

 const handleCheckInput = (e) => {
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
          <h4 onClick = {handleClear} style = {{textDecoration : "underline"}}>Clear</h4>
        </div>
        <div className="filter_price">
          <label htmlFor="pricerange">Price </label>
          <input id = "pricerange" type="range" min = "2600" max = "55000" defaultValue={"0"} value = {priceVal} step = "10" onChange={handleRangeInput}/>
        </div>
        <div className="filter_category">
          <h4>Category</h4>
          {categoryInput.map(item => (
              <div className="filter_inputs">
              <input type="checkbox" id= {item}  value = {item}  onChange={handleCheckInput}  />
              <label htmlFor= {item}>{item}</label>
              </div>
            ))
          }
        </div>
        <div className="filter_ratings">
          <h4>Rating</h4>
          {ratingInput.map(item => (
            <div key = {item} className="filter_inputs">
            <input type="radio" id= {item}  value = {item}  checked = {ratingOption === item} onChange={handleRatingInput} />
            <label htmlFor= {item}>{item} & above </label>
            </div>
          ))}
        </div>
        <div className="filter_sort">
          <h4>Sort By</h4>
          {sortingInput.map(item => (
            <div className="filter_inputs">
             <input type="radio" id= {item} value = {item} checked = {sortOption === item}  onChange={handleSorting}/>
              <label htmlFor= {item}> Price - {item === "option1" ? "Low to High" : "High to Low"}</label>
            </div>
          ))}
        </div>
      </aside>
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
              <button disabled = {product.isAddedToCart ? true :false} onClick={() => handleAddToCart(product.id)}>
                {!product.isAddedToCart ? "Add to cart"  : <Link style = {{textDecoration : "none" , color : "#fff"}} to = "/cart">Go to cart</Link> }
              </button>
              <div className="like-wishlist">
                <div onClick={() => handleWishList(product.id)} className="wishlist-button">
                {!product.isAddedToWish ? <AiOutlineHeart /> : <AiFillHeart/> }
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
