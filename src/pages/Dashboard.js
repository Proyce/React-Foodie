import React from 'react'
import Navbar from "../components/Navbar";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
        <Navbar/>
        <section className="dashboard-container">
            <DashboardNav/>
            <section className="dashboard-main">
            <h2 className="center">Dashboard Home</h2>
                <section className="dashboard-content">
                    <section className="dashboard-card-container">
                        <Link to="/"><section className="dashboard-cards center"><h4>Total Users<br/>27343</h4></section></Link>
                        <Link to="/"><section className="dashboard-cards center"><h4>Total Restaurants<br/>2783</h4></section></Link>
                        <Link to="/"><section className="dashboard-cards center"><h4>Total Menus<br/>367</h4></section></Link>
                    </section>
                </section>
            </section>
        </section>
        <Footer/>
        </>
    )
}

export default Dashboard;
