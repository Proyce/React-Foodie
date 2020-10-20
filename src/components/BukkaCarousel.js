import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import iyabasira from "../images/foodplace.jpg";
import iyabasira2 from "../images/foodbukka-background.jpg";
import iyabasira3 from "../images/restaurant-cafe.jpg";

const BukkaCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={iyabasira} alt="carousel-img" />
        </div>
        <div>
          <img src={iyabasira2} alt="carousel-img" />
        </div>
        <div>
          <img src={iyabasira3} alt="carousel-img" />
        </div>
      </Carousel>
    </div>
  );
};

export default BukkaCarousel;
