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
        <section className="left left-bukka ml-25">
          <h2 className="text-danger mt-50 ml-50 mb-50 center">
            Iya Basira Restaurant
          </h2>
          <BootstrapCarousel />
        </section>
        <section className="right right-bukka center mt-50 text-danger">
          <h2>Restaurants Details</h2>
        </section>
        <section className="clear bottom-bukka">
          <h2 className="text-danger mt-50 ml-50 center">Nearby Restaurants</h2>
          <section className="jumbotron">
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
            <BukkaCards
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
            />
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Bukkas;
