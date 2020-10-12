import React from "react";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/HomeHeader";
import HowItWorks from "../components/HowItWorks";
import BukkaCards from "../components/BukkaCards";
import AreaCards from "../components/AreaCards";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import foodImg from "../images/foodbukka-2.jpg";
import lgImg from "../images/lagos-ng.jpg";
import abjImg from "../images/abuja.jpg";
import ajah from "../images/ajah-lagos.jpg";
import ikeja from "../images/ikeja-lagos.jpg";
import ikoyi from "../images/ikoyi-lagos.jpg";
import owerri from "../images/owerri-nigeria.jpg";
import ph from "../images/port-harcourt-nigeria.jpg";
import enugu from "../images/enugu.jpg";
import vi from "../images/vi-lagos.jpg";
import friedRice from "../images/fried-rice.jpg";
import amalaImg from "../images/amala-naija.jpg";
import foodChaw from "../images/food-chaw.jpg";
import suyaImg from "../images/naija-suya.jpg";
import mamaPut from "../images/mama-put.jpg";
import riceImg from "../images/nigerian-egg-fried-rice.jpg";
import foodImg2 from "../images/image-food.jpg";
import foodImg3 from "../images/foodplace.jpg";
// import foodImg4 from "../images/foodcafe.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <HowItWorks />
      <section className="card-bg">
        <h2 className="pt-50 mt-25 mb-15 center feat-bukka-head">
          Featured Restaurants
        </h2>
        <section className="bukka-card-container">
          <BukkaCards
            name="Iya Basira restaurant"
            image={foodImg}
            location="1, signboard bus stop, Addo-Badore Road, Ajah, Lagos."
            reviews="8765 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★★☆"
            type="Mama Put Bukka"
            price="N300"
          />
          <BukkaCards
            name="The Food Place"
            image={foodImg3}
            location="No 1, Addo Road, Ajah Roundabout, Ajah, Eti-Osa, Lagos Nigeria. No 1, Addo Road, Ajah Roundabout, Ajah, Eti-Osa, Lagos Nigeria."
            reviews="507 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★☆☆☆"
            type="2-Star Restaurant"
            price="N500"
          />
          <BukkaCards
            name="Mama Ebuka Restaurants"
            image={mamaPut}
            location="Located at Shop 4 Imo 1 Plaza, Ado Road, Ajah, Lagos"
            reviews="570 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★★☆"
            type="Mama Put Bukka"
            price="N350"
          />
          <BukkaCards
            name="Iyanla Catering Services"
            image={foodImg2}
            location="Block D Hse 19b Abraham Adesanya Estate, Ajah, Lagos Nigeria"
            reviews="438 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★☆☆☆☆"
            type="Home Delivery Catering Services"
            price="N3000"
          />
          <BukkaCards
            name="Ahmaddu Musa Maisha"
            image={foodImg}
            location="Located at Road 7, Abraham Adesanya Estate, Ajah, Lagos"
            reviews="84 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★☆☆"
            type="Maishai"
            price="N200"
          />
          <BukkaCards
            name="Amala Shitta"
            image={amalaImg}
            location="Located at 50 Addo Road, Ajah, Lekki-Ajah Lagos Nigeria"
            reviews="500 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★★☆"
            type="Amala Joint"
            price="N500"
          />
          <BukkaCards
            name="Panarottis Restaurant"
            image={friedRice}
            location="Panarottis Restaurant, 20 Langbasa Road, Ajah, Lagos"
            reviews="3637 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★☆☆"
            type="3-star Restaurant"
            price="N1000"
          />
          <BukkaCards
            name="Mallam Musa Suleiman Yaguda Suya Jointt"
            image={suyaImg}
            location="Cardinal Anthony Olubunmi Okogie Rd Shop C42, Lekki-Ajah"
            reviews="450 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★★★"
            type="Suya (Local Nigerian Barbeque)"
            price="N1200"
          />
          <BukkaCards
            name="Iya Tunde Bole Joint"
            image={foodImg}
            location="Lekki-Epe Expressway, 5th Roundabout Circle Mall, Ajah Lagos "
            reviews="5000 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★☆☆"
            type="Bole (Nigerian Roasted Plantain)"
            price="N300"
          />
          <BukkaCards
            name="Chris Shawarma Place"
            image={foodImg}
            location="Shop C41, Lekki Mall, Ibeju Lekki Express, Lekki Lagos"
            reviews="50 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★★★"
            type="Sharwarma"
            price="N1000"
          />
          <BukkaCards
            name="Dorinda Fast Food"
            image={foodChaw}
            location="H518, Road 3, Ikota Shopping Complex, Vgc, Lekki, Lagos "
            reviews="30 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★★☆"
            type="Fast Food"
            price="N750"
          />
          <BukkaCards
            name="Doole Bukka Joint"
            image={riceImg}
            location="10 Oladipo Dunmoye Srt, Oke-Ira, off Ajah-Addoh Road, Lekki, Lagos"
            reviews="508 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★☆☆"
            type="Mama Put Bukka"
            price="N300"
          />
        </section>
        <section className="view-all pb-25">
          <Link to="/bukkas" className="view-all-child xtreme-bold">
            View all restaurants
          </Link>
        </section>
      </section>

      <h2 className="pt-50 mb-50 center feat-bukka-head">
        Featured Cities
      </h2>

      <section className="area-home">
        <AreaCards
          image={abjImg}
          city="Abuja"
          number="1320 Restaurants"
          className="area-img"
          cityUrl="/cities/"
        />
        <AreaCards
          image={lgImg}
          city="Lagos"
          number="13674 Restaurants"
          className="area-img"
          cityUrl="/cities/"
        />
        <AreaCards
          image={ph}
          city="Port-Harcourt"
          number="1051 Restaurants"
          className="area-img"
          cityUrl="/cities/"
        />
        <AreaCards
          image={vi}
          city="Victoria Island"
          number="197 Restaurants"
          className="area-img"
          cityUrl="/cities/"
        />
        <AreaCards
          image={enugu}
          city="Enugu"
          number="324 Restaurants"
          className="area-img"
          cityUrl="/cities/"
        />
        <AreaCards
          image={ikeja}
          city="Ikeja"
          number="572 Restaurants"
          className="area-img"
          cityUrl="/cities/"
        />
        <AreaCards
          image={ajah}
          city="Ajah"
          number="208 Restaurants"
          className="area-img"
          cityUrl="/cities/"
        />
        <AreaCards
          image={owerri}
          city="Owerri"
          number="176 Restaurants"
          className="area-img"
          cityUrl="/cities/"
        />
        <AreaCards
          image={ikoyi}
          city="Ikoyi"
          number="180 Restaurants"
          className="area-img"
          cityUrl="/cities/"
        />
      </section>

      <section className="view-all mb-25">
        <Link to="/bukkainareas" className="view-all-child xtreme-bold">
          View all Cities
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Home;
