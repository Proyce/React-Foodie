import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BukkaCards from "../components/BukkaCards";
import BukkaCarousel from "../components/BukkaCarousel";
import Footer from "../components/Footer";
import foodImg from "../images/foodbukka-2.jpg";
import foodChaw from "../images/food-chaw.jpg";
import riceImg from "../images/nigerian-egg-fried-rice.jpg";
import { MdLocationOn } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import { FaRestroom } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { IoIosTime } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaChair } from "react-icons/fa";

const Bukkas = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main className="name">
        <section className="bukka-flex-container">
          <section className="left left-bukka mb-15">
            <h2 className="mt-50 ml-50 mb-25 center">Iya Basira Restaurant</h2>
            <BukkaCarousel />
          </section>
          <section className="right right-bukka center mt-25 mb-50">
            <h2 className="center mb-25 mt-25">For Reservations</h2>
            <section className="bukka-reservations">
              <h3 className="bukka-reservations-text bukka-price">Price: From N300. </h3>
              <h3 className="bukka-reservations-text">Price depends on food and quantity. </h3>
              <h3 className="bukka-reservations-text"><FaPhoneSquare size="1.2rem" className="bukka-icons mr-10 bukka-color" />Phone: &nbsp;<a href="tel:08139844222" className="phone-email-link">08139844222</a></h3>
              <h3 className="bukka-reservations-text"><MdEmail size="1.2rem" className="bukka-icons mr-10 bukka-color" /><a href="email:ibasira-ng@gmail.com" className="phone-email-link">ibasira-ng@gmail.com</a></h3>
            </section>
            <section>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7929.065623641067!2d3.5790440999999897!3d6.453964100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1601867299114!5m2!1sen!2sng"
                title="Location on Map"
                width="300"
                height="300"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </section>
          </section>
          <section className="clear bukka-details">
          <h2 className="text-left mb-25 mt-25">Restaurants Details</h2>
          <section restaurant-details-container>
            <ul className="restaurant-details-item text-left mb-25">
              <li className="restaurant-list-details">
                <b><FaPhoneSquare size="1.2rem" className="bukka-icons mr-10 bukka-color" />Phone Number&nbsp;</b><a href="tel:08139844222" className="phone-email-link">08139844222</a>
              </li>
              <li className="restaurant-list-details">
                <b><MdEmail size="1.2rem" className="bukka-icons mr-10 bukka-color" />Email:</b> &nbsp;<a href="email:ibasira-ng@gmail.com" className="phone-email-link">ibasira-ng@gmail.com</a>
              </li>
              <li className="restaurant-list-details">
                <b><FcRating size="1.2rem" className="bukka-icons mr-10 bukka-color" />Reviews & Rating:&nbsp;</b> ★★★★☆ (8765 reviews)
              </li>
              <li className="restaurant-list-details">
                <b><MdLocationOn size="1.2rem" className="bukka-icons mr-10 bukka-color" />Location:&nbsp;</b> No 1, signboard bus stop, Addo-Badore
                Road. Opposite Harvest Bakery, Ajah, Lagos.
              </li>
              <li className="restaurant-list-details">
                <b><IoMdRestaurant size="1.2rem" className="bukka-icons mr-10 bukka-color" />Restaurant Type:&nbsp;</b>Local Bukka
              </li>
              <li className="restaurant-list-details">
                <b><FaMoneyBill size="1.2rem" className="bukka-icons mr-10 bukka-color" />Cost:&nbsp;</b> From N300
              </li>
            </ul>

            <ul className="restaurant-details-item text-left mb-25">
              <li className="restaurant-list-details">
                <b><FaChair size="1.2rem" className="bukka-icons mr-10 bukka-color" />Capacity&nbsp;</b> 15 tables
              </li>
              <li className="restaurant-list-details">
                <b><IoIosTime size="1.2rem" className="bukka-icons mr-10 bukka-color" />Hours of operation&nbsp;</b> <br />
                Mon–Fri :00 pm–1:00 am <br /> Sat 12:00 pm–1:30 am <br /> Sun
                1:00 pm–12:00 am
              </li>
              <li className="restaurant-list-details">
                <b><FaCar size="1.2rem" className="bukka-icons mr-10 bukka-color" />Parking?&nbsp;</b> No
              </li>
              <li className="restaurant-list-details">
                <b><FaRestroom size="1.2rem" className="bukka-icons mr-10 bukka-color" />Restroom?&nbsp;</b> Yes
              </li>
            </ul>
            </section>
            <p>
              <b>Details</b>:<br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.{" "}
              <br />
              <b>Menu</b>: <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </section>
        </section>
        <section className="bottom-bukka mt-50">
          <h2 className="text-danger center mb-25">Nearby Restaurants</h2>
          <section className="bukka-card-container">
            <BukkaCards />
            
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Bukkas;
