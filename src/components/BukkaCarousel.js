import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import iyabasira from "../images/iyabasira.jpg";
import iyabasira2 from "../images/iyabasira-2.jpg";
import iyabasira3 from "../images/fried-rice.jpg";

const BukkaCarousel = () => {
  return (
    <div class="carousel-wrapper">
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
