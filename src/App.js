import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import {Routes , Route} from "react-router-dom"
import WishList from './Components/WishList';
import Cart from './Components/Cart';
import Products from "./Components/Products"
import Login from './auth/Login';
import Missing from './Components/Missing';
import Register from './auth/Register';
import Checkout from "./Components/Checkout"
import { ToastContainer } from "react-toastify"
import UserProfile from './Components/UserProfile';
import Mockman from "mockman-js";
import DataProvider from './Context/DataContext';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div>
     <DataProvider>
     <Header/>
     <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/wishlist" element = {<WishList/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/product" element = {<Products/>}/>
      <Route path = "/categories/:categoryId" element = {<Products/>}/>
      <Route path = "/product/:productId" element = {<ProductDetails/>}/>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/checkout" element = {<Checkout/>}/>
      <Route path = "/user_profile" element = {<UserProfile/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/mockman" element = {<Mockman/>}/>
      <Route path = "*" element = {<Missing/>}/>
     </Routes>
     <ToastContainer/>
     </DataProvider>
     <Footer/>
    </div>
  );
}

export default App;
