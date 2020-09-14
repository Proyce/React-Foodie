import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-danger navbar-expand-lg">
        <span className="navbar-brand mb-0 h1 xtreme-bold ml-50">FOODBUKKA</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <section
          className="collapse navbar-collapse no-outline bold"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link mr-25">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link mr-25">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link mr-25">
                Contact Us
              </Link>
            </li>
            </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/signin" className="nav-link mr-25">
                <button class="btn btn-outline-light">Sign Up</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                <button class="btn btn-outline-light">Sign In</button>
              </Link>
            </li>
          </ul>
        </section>

        
      </nav>
    </>
  );
};

export default Navbar;
