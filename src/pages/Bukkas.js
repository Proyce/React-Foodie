import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BukkaCards from "../components/BukkaCards";
import BootstrapCarousel from "../components/BootstrapCarousel";
import Footer from "../components/Footer";
import foodImg from "../images/foodbukka-2.jpg";

const Bukkas = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main className="name">
        <section className="left left-bukka ml-50 mb-50">
          <h2 className="text-danger mt-50 ml-50 mb-50 center">
            Iya Basira Restaurant
          </h2>
          <BootstrapCarousel />
        </section>
        <section className="right right-bukka center mt-50 text-danger">
          <h2 className="center text-center d-block mb-50">
            Restaurants Details
          </h2>
          <ul className="text-left text-dark">
            <li>
              <b>Reviews & Rating:&nbsp;</b> ★★★★☆ (8765 reviews)
            </li>
            <li>
              <b>Location:&nbsp;</b> No 1, signboard bus stop, Addo-Badore Road.
              Opposite Harvest Bakery, Ajah, Lagos.
            </li>
            <li>
              <b>Restaurant Type:&nbsp;</b>Local Bukka
            </li>
            <li>
              <b>Cost:&nbsp;</b> From N300
            </li>
            <li>
              <b>Capacity&nbsp;</b> 15 tables
            </li>
            <li>
              <b>Hours of operation&nbsp;</b> <br />
              Mon–Fri :00 pm–1:00 am <br /> Sat 12:00 pm–1:30 am <br /> Sun 1:00
              pm–12:00 am
            </li>
            <li>
              <b>Phone Number&nbsp;</b>08139844222
            </li>
            <li>
              <b>Email:</b> &nbsp;ibasira-ng@gmail.com
            </li>
            <li>
              <b>Parking?&nbsp;</b> No
            </li>
            <li>
              <b>Restroom?&nbsp;</b> Yes
            </li>
          </ul>
        </section>
        <section className="clear bottom-bukka mt-50">
          <section className="jumbotron">
            <h2 className="text-danger center mb-25">Nearby Restaurants</h2>
            <BukkaCards
              name="Panarottis Restaurant"
              image={foodImg}
              location="Panarottis Restaurant, 20 Langbasa Road, Ajah, Lagos"
              reviews="3637 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
              stars="★★★☆☆"
            />
            <BukkaCards
              name="Mallam Yaguda Suya Joint"
              image={foodImg}
              location="Cardinal Anthony Olubunmi Okogie Rd Shop C42, Lekki-Ajah"
              reviews="450 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
              stars="★★★★★"
            />
            <BukkaCards
              name="Iya Tunde Bole Joint"
              image={foodImg}
              location="Lekki-Epe Expressway, 5th Roundabout Circle Mall, Ajah Lagos "
              reviews="5000 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
              stars="★★★☆☆"
            />
            <BukkaCards
              name="Chris Shawarma Place"
              image={foodImg}
              location="Shop C41, Lekki Mall, Ibeju Lekki Express, Lekki Lagos"
              reviews="50 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
              stars="★★★★★"
            />
            {/* <BukkaCards
              name="Dorinda Fast Food"
              image={foodImg}
              location="H518, Road 3, Ikota Shopping Complex Ikota Shopping Complex, Vgc, Lekki, Lagos "
              reviews="30 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
              stars="★★★★☆"
            />
            <BukkaCards
              name="Doole Bukka Joint"
              image={foodImg}
              location="10 Oladipo Dunmoye Street, Oke-Ira, off Ajah-Addoh Road, Eti-Osa 101245, Lekki "
              reviews="508 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
              stars="★★★☆☆"
            /> */}
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Bukkas;
