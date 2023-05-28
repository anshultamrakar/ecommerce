import React from 'react'
import NavBar from './NavBar'
import {Link} from "react-router-dom"
import logo from "../Assets/Images/Furnit-logos_black.png"
import SearchProducts from './SearchProducts'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

const Header = () => {
  const {wishItems , cartItems} = useContext(DataContext)
  return (
    <div className='Header'>
     <figure>
      <Link to = "/"> <img src = {logo} width= "100" height="100"/></Link> 
     </figure>
      <SearchProducts/>
       <NavBar wishItems = {wishItems} cartItems = {cartItems} />
    </div>
  )
}

export default Header