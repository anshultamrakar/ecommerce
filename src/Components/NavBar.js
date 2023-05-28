import React from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";


const NavBar = ({wishItems , cartItems}) => {
  return (
    <div className="navbar">
      <ul className="navbar_list">
        <Link to="/login">
          <li>
            <AiOutlineUser />
          </li>
        </Link>
        <Link to="/wishlist">
          <li className="navbar-wish">
            <AiOutlineHeart />
            <div className="navbar_count">{wishItems.length}</div>
          </li>
        </Link>
        <Link to="/cart">
          <li className="navbar-cart">
            <AiOutlineShoppingCart />
            <div className="navbar_count">{cartItems.length}</div>
          </li>{" "}
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
