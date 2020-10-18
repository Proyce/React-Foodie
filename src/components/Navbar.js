import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="menu">
          <li className="logo">
            <Link to="/">FINDBUKKA</Link>
          </li>
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/about">About</Link>
          </li>
          <li className="item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="item">
            <Link to="/allbukkas">Restaurants</Link>
          </li>
          <li className="item">
            <Link to="/menus">Menus</Link>
          </li>
          {/* <li className="item nav-button">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="item nav-button nav-secondary">
            <Link to="/signin">Sign In</Link>
          </li> */}
          <li className="toggle">
            <span className="hamburger"></span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
