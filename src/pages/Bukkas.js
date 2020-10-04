import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BukkaCards from "../components/BukkaCards";
import BukkaCarousel from "../components/BukkaCarousel";
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
          <BukkaCarousel />
        </section>
        <section className="right right-bukka center mt-50 text-danger">
          <h2 className="center text-center d-block mb-50">
            Restaurants Details
          </h2>
          <ul className="text-left text-dark">
            <li className="restaurant-list-details">
              <b>Reviews & Rating:&nbsp;</b> ★★★★☆ (8765 reviews)
            </li>
            <li className="restaurant-list-details">
              <b>Location:&nbsp;</b> No 1, signboard bus stop, Addo-Badore Road.
              Opposite Harvest Bakery, Ajah, Lagos.
            </li>
            <li className="restaurant-list-details">
              <b>Restaurant Type:&nbsp;</b>Local Bukka
            </li>
            <li className="restaurant-list-details">
              <b>Cost:&nbsp;</b> From N300
            </li>
            <li className="restaurant-list-details">
              <b>Capacity&nbsp;</b> 15 tables
            </li>
            <li className="restaurant-list-details">
              <b>Hours of operation&nbsp;</b> <br />
              Mon–Fri :00 pm–1:00 am <br /> Sat 12:00 pm–1:30 am <br /> Sun 1:00
              pm–12:00 am
            </li>
            <li className="restaurant-list-details">
              <b>Phone Number&nbsp;</b>08139844222
            </li>
            <li className="restaurant-list-details">
              <b>Email:</b> &nbsp;ibasira-ng@gmail.com
            </li>
            <li className="restaurant-list-details">
              <b>Parking?&nbsp;</b> No
            </li>
            <li className="restaurant-list-details">
              <b>Restroom?&nbsp;</b> Yes
            </li>
          </ul>
        </section>
        <section className="clear bukka-details">
          <p>
            <b>Details</b>:<br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. <br />
            <b>Menu</b>: <br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </section>
        <section className="bottom-bukka mt-50">
          <h2 className="text-danger center mb-25">Nearby Restaurants</h2>
          <section className="bukka-card-container">
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
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Bukkas;
