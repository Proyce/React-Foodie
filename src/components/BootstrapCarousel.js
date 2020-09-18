import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import iyabasira from "../images/iyabasira.jpg";
import iyabasira2 from "../images/iyabasira-2.jpg";
import iyabasira3 from "../images/fried-rice.jpg";

class BootstrapCarousel extends Component {
  render() {
    return (
      <section>
        <section className="container">
          <Carousel>
            <Carousel.Item style={{ width: "600px", height: "450px" }}>
              <img
                style={{ width: "600px", height: "450px" }}
                className="d-block w-100"
                src={iyabasira}
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: "600px", height: "450px" }}>
              <img
                style={{ width: "600px", height: "450px" }}
                className="d-block w-100"
                src={iyabasira2}
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: "600px", height: "450px" }}>
              <img
                style={{ width: "600px", height: "450px" }}
                className="d-block w-100"
                src={iyabasira3}
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </section>
    );
  }
}

export default BootstrapCarousel;
