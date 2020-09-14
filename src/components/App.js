import React, { Component } from "react";
import Home from "../pages/Home";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "../pages/About";
import Bukkas from "../pages/Bukkas";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Featured from "../pages/Featured";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/bukkas" component={Bukkas} />
          <Route path="/contact" component={Contact} />
          <Route path="/error" component={Error} />
          <Route path="/featured" component={Featured} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
