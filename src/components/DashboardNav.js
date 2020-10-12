import React from 'react'
import { Link } from "react-router-dom"

const DashboardNav = () => {
    return (
        <>
            <section className="dashboard-nav">
                <ul>
                    <Link className="dash-nav" to="/dashboard/"><li>Dashboard</li></Link>
                    <Link className="dash-nav" to="/dashboard-bukkas"><li>Bukkas</li></Link>
                    <Link className="dash-nav" to="/dashboard-users"><li>Users</li></Link>
                    <Link className="dash-nav" to="/dashboard-menus"><li>Menus</li></Link>
                    <Link className="dash-nav" to="/dashboard-deliveries"><li>Deliveries</li></Link>
                    <Link className="dash-nav" to="/dashboard-locations"><li>Locations</li></Link>
                    <Link className="dash-nav" to="/dashboard-analytics"><li>Analytics</li></Link>
                </ul>
            </section>
        </>
    )
}

export default DashboardNav
