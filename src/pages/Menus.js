import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuCard from '../components/MenuCard';

const Menus = () => {
    return (
        <>
            <Navbar />
            <Header />
            <h2 className="pt-25 mt-25 mb-25 center feat-bukka-head">
            All Menus
            </h2>
            <section className="bukka-card-container">
            <MenuCard />
            </section>
            <Footer />
        </>
    );
}

export default Menus;
