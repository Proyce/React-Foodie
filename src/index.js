import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "jquery/dist/jquery.min.js";
import App from "./components/App";
import "./css/App.css";
// import "./css/navbar.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
