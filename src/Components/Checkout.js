import React from 'react'
import { useContext , useEffect } from 'react'
import { DataContext } from '../Context/DataContext'
const Checkout = () => {

  const {cartItems , itemPrice} = useContext(DataContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='checkout'>
       <h2 style = {{textAlign : "center"}}>Checkout</h2>
       <div className='checkout_layout'>
       <div className='checkout-address'> 
       <form>
        <input type = "radio"/>
        <label>15, Opp Fire Briged, Dariyalal Nivas, S V Rd, Kandivali (west)</label>
       </form>
      </div>
      <div className='checkout_order_summary'>
        <h2>Order Summary</h2>
        <hr/>
        <ul className='checkout_items'>
          <li className='checkout_listItems'>Item</li>
          <li className='checkout_listItems'>QTY</li>
        </ul>
        {cartItems.map(item => (
            <ul className='checkout_items'>
              <li className='checkout_listItems'>{item.categoryName}</li>
              <li className='checkout_listItems'>{item.qty}</li>
            </ul>
        ))}
        <hr/>
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
        <button>PLACE ORDER</button>
      </div>
     
      </div>
    
    </div>
  )
}

export default Checkout