import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { DataContext } from "../Context/DataContext";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  let {productId} = useParams();
  const {  handleAddToCart , handleWishList } = useContext(DataContext);
  const [productDetailsItem ,setProductDetailsItems] = useState({})

  const getProductDetails = async() => {
    try{
      const response = await axios.get(`/api/products/${productId}`)
      console.log(response?.data?.product)
      setProductDetailsItems(response?.data?.product)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    getProductDetails()
  },[])

  return (
    <div className="productDetails">
       <div className="productDetails_product">
        <div className="prductDetails_details">
          <img src={productDetailsItem?.img} />
          <div className="product_description">
            <h2>{productDetailsItem?.title}</h2>
            <p> ₹ {productDetailsItem?.price}</p>
            <h4>50% OFF</h4>
            <p>{productDetailsItem?.description}</p>
            <div className="productDetails_btns">
            <button  onClick={() => handleWishList(productDetailsItem.id)} >Save for later</button>
            <button   onClick={() => handleAddToCart(productDetailsItem.id)}>
              Add To Cart
            </button>
            </div>
            <br/>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ProductDetails;
