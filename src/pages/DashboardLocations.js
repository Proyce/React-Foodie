import React from 'react'
import Navbar from "../components/Navbar";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const DashboardLocations = () => {
    return (
      <div>
        <Navbar />
        <section className="dashboard-container">
          <DashboardNav />
          <section className="dashboard-main">
            <h2 className="center">Locations</h2>
            <section className="dashboard-content">
              <section className="dashboard-card-container">
                <Link to="/">
                  <section className="dashboard-cards"></section>
                </Link>
                <Link to="/">
                  <section className="dashboard-cards"></section>
                </Link>
                <Link to="/">
                  <section className="dashboard-cards"></section>
                </Link>
              </section>
            </section>
          </section>
        </section>
        <Footer />
      </div>
    );
}

export default DashboardLocations
