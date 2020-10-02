import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-dark bg-danger navbar-expand-lg fixed-top">
        <span className="navbar-brand mb-0 h1 xtreme-bold ml-50">
          FOODBUKKA
        </span>
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
              <Link to="/bukkas" className="nav-link mr-25">
                Bukkas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link mr-25">
                About Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/signup" className="nav-link mr-25">
                <button className="btn btn-outline-light">Sign Up</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                <button className="btn btn-outline-light">Sign In</button>
              </Link>
            </li>
          </ul>
        </section>
      </nav> */}

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
          <li className="item nav-button">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="item nav-button nav-secondary">
            <Link to="/signin">Sign In</Link>
          </li>
          <li className="toggle">
            <span className="hamburger"></span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
