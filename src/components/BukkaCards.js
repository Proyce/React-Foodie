import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";

const BukkaCards = ({ image, name, location, type, reviews, stars, price }) => {
  return (
    <>
      <section className="bukka-card">
        <Link to="/"><img alt="bukka-card-img" src={image} /> </Link>
        <section className="bukka-card-text ml-10 mr-10 mt-10 mb-10">
          <Link to="/"><h3 className="center mb-10 bukka-card-header">{name}</h3></Link>
          <p className="icon-para">
            <MdLocationOn size="1.2rem" className="bukka-icons mr-10 bukka-color"/>
            {location}
          </p>
          <p className="mt-10 mb-10 icon-para">
            <IoMdRestaurant size="1.2rem" className="bukka-icons mr-10 bukka-color" />
            {type}
          </p>
          <p className="mb-10 icon-para">
            <GiMoneyStack size="1.2rem" className="bukka-icons mr-10 bukka-color" />
            From {price}
          </p>
          <p className="inline-block mr-10 bukka-card-rating">{stars}</p>
          <small className="inline-block bold bukka-card-rating">
            {reviews}
          </small>
        </section>
        <a className="bukka-card-button block center" href="/">
          See More Details
        </a>
      </section>
    </>
  );
};

export default BukkaCards;
