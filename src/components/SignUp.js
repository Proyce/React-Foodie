import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/App.css";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <Header />
      <section className="form-container">
        <form className="form">
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-danger btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/signin">Sign in?</Link>
          </p>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
