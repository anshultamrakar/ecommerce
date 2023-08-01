import React from 'react'
import {useContext} from 'react'
import { DataContext } from '../Context/DataContext'
import {Link} from "react-router-dom"

const PriceDetails = () => {
    const {itemPrice} = useContext(DataContext)
   
  return (
    <div className="price_details">
        <h2>Price details</h2>
        <hr />
        <div className="price_details_list">
          <p>Subtotal</p>
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
        <Link to = "/checkout"><button className="price_details_list_btn">Checkout</button></Link>
      </div>
  )
}

export default PriceDetails