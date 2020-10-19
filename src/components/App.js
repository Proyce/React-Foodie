import React, { Component } from "react";
import Home from "../pages/Home";
import AllBukkas from "../pages/AllBukkas";
import Menus from "../pages/Menus";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Bukkas from "../pages/Bukkas";
import Error from "../pages/Error";
import Featured from "../pages/Featured";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Search from "../pages/Search";
import Dashboard from "../pages/Dashboard";
import DashboardBukkas from "../pages/DashboardBukkas";
import DashboardUsers from "../pages/DashboardUsers";
import DashboardMenus from "../pages/DashboardMenus";
import DashboardDeliveries from "../pages/DashboardDeliveries";
import DashboardAnalytics from "../pages/DashboardAnalytics";
import DashboardLocations from "../pages/DashboardLocations";

class App extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/bukkas/" component={Bukkas} />
          <Route path="/search/" component={Search} />
          <Route path="/allbukkas" component={AllBukkas} />
          <Route path="/menus" component={Menus} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/error" component={Error} />
          <Route path="/featured" component={Featured} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard/" component={Dashboard} />
          <Route path="/dashboard-bukkas" component={DashboardBukkas} />
          <Route path="/dashboard-users" component={DashboardUsers} />
          <Route path="/dashboard-menus" component={DashboardMenus} />
          <Route path="/dashboard-deliveries" component={DashboardDeliveries} />
          <Route path="/dashboard-locations" component={DashboardLocations} />
          <Route path="/dashboard-analytics" component={DashboardAnalytics} />
        </Switch>
      </section>
    );
  }
}

export default App;
