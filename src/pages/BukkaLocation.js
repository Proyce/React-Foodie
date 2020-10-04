import React from 'react'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BukkaCards from "../components/BukkaCards";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import foodImg from "../images/foodbukka-2.jpg";

const BukkaLocation = () => {
    return (
      <>
        <Navbar />
        <Header />
        <h2 className="ml-50 mt-50 mb-15">Restaurants in Lagos</h2>
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
            image={foodImg}
            location="No 1, Addo Road, Ajah Roundabout, Ajah, Eti-Osa, Lagos Nigeria. No 1, Addo Road, Ajah Roundabout, Ajah, Eti-Osa, Lagos Nigeria."
            reviews="507 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★☆☆☆"
            type="2-Star Restaurant"
            price="N500"
          />
          <BukkaCards
            name="Mama Ebuka Restaurants"
            image={foodImg}
            location="Located at Shop 4 Imo 1 Plaza, Ado Road, Ajah, Lagos"
            reviews="570 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★★☆"
            type="Mama Put Bukka"
            price="N350"
          />
          <BukkaCards
            name="Iyanla Catering Services"
            image={foodImg}
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
            name="Morris Beer Joint"
            image={foodImg}
            location="Located at 50 Addo Road, Ajah, Lekki-Ajah Lagos Nigeria"
            reviews="500 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★★☆"
            type="Beer Joint"
            price="N500"
          />
          <BukkaCards
            name="Panarottis Restaurant"
            image={foodImg}
            location="Panarottis Restaurant, 20 Langbasa Road, Ajah, Lagos"
            reviews="3637 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★☆☆"
            type="3-star Restaurant"
            price="N1000"
          />
          <BukkaCards
            name="Mallam Musa Suleiman Yaguda Suya Jointt"
            image={foodImg}
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
            image={foodImg}
            location="H518, Road 3, Ikota Shopping Complex, Vgc, Lekki, Lagos "
            reviews="30 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★★☆"
            type="Fast Food"
            price="N750"
          />
          <BukkaCards
            name="Doole Bukka Joint"
            image={foodImg}
            location="10 Oladipo Dunmoye Srt, Oke-Ira, off Ajah-Addoh Road, Lekki, Lagos"
            reviews="508 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
            stars="★★★☆☆"
            type="Mama Put Bukka"
            price="N300"
          />
        </section>

        <section className="bottom-bukka mt-50">
          <h2 className="text-danger center mb-25">Nearby Restaurants</h2>
          <section className="bukka-card-container">
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
              image={foodImg}
              location="H518, Road 3, Ikota Shopping Complex, Vgc, Lekki, Lagos "
              reviews="30 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
              stars="★★★★☆"
              type="Fast Food"
              price="N750"
            />
            <BukkaCards
              name="Doole Bukka Joint"
              image={foodImg}
              location="10 Oladipo Dunmoye Srt, Oke-Ira, off Ajah-Addoh Road, Lekki, Lagos"
              reviews="508 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
              stars="★★★☆☆"
              type="Mama Put Bukka"
              price="N300"
            />
          </section>
        </section>
        <Footer />
      </>
    );
}

export default BukkaLocation;
