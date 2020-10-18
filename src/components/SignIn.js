import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/App.css";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <Header />
      <section className="form-container">
        <form className="form">
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                required
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-danger btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <Link to="/">password?</Link>
          </p>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default SignIn;
