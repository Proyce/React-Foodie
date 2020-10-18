import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";
import { FcRating } from "react-icons/fc";

const BukkaCards = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const getRestaurants = async () => {
      const response = await fetch(
        "https://foodbukka.herokuapp.com/api/v1/restaurant"
      );
      // console.log(response);
      const jsonResponse = await response.json();
      // console.log(jsonResponse.Result);
      setRestaurants(jsonResponse.Result);
    };
    getRestaurants();
  }, []);

  return (
    <>
      {restaurants.slice(0, 12).map((restaurant, index) => {
          return (
            <section className="bukka-card" key={index}>
              <img alt="bukka-card-img" src={restaurant.image} />
              <section className="bukka-card-text ml-10 mr-10 mt-10 mb-10">
                <h3 className="center mb-10 bukka-card-header">{restaurant.businessname.charAt(0).toUpperCase() +
                  restaurant.businessname.slice(1)}</h3>
                <p className="icon-para">
                  <MdLocationOn size="1.2rem" className="bukka-icons mr-10 bukka-color"/>
                  {restaurant.address}
                </p>
                <p className="mt-10 mb-10 icon-para">
                  <IoMdRestaurant size="1.2rem" className="bukka-icons mr-10 bukka-color" />
                  {restaurant.restauranttype}
                </p>
                <p className="mb-10 icon-para">
                  <GiMoneyStack size="1.2rem" className="bukka-icons mr-10 bukka-color" />
                  From {restaurant.averagecost}
                </p>
                <p className="inline-block mr-10 bukka-card-rating"><FcRating size="1.2rem" className="bukka-icons mr-10 bukka-color" />★★★★☆</p>
                <small className="inline-block bold bukka-card-rating">
                  {restaurant.reviews}
                </small>
              </section>
              <a className="bukka-card-button block center" href={`/${restaurant.slug}`}>
                See More Details
              </a>
             </section>
          );
        })}
    </>
  );
};
export default BukkaCards;

export const AllBukkaCards = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const getRestaurants = async () => {
      const response = await fetch(
        "https://foodbukka.herokuapp.com/api/v1/restaurant"
      );
      // console.log(response);
      const jsonResponse = await response.json();
      // console.log(jsonResponse.Result);
      setRestaurants(jsonResponse.Result);
    };
    getRestaurants();
  }, []);

  return (
    <>
      {restaurants.slice(0, 44).map((restaurant, index) => {
          return (
            <section className="bukka-card" key={index}>
              <img alt="bukka-card-img" src={restaurant.image} />
              <section className="bukka-card-text ml-10 mr-10 mt-10 mb-10">
                <h3 className="center mb-10 bukka-card-header">{restaurant.businessname.charAt(0).toUpperCase() +
                  restaurant.businessname.slice(1)}</h3>
                <p className="icon-para">
                  <MdLocationOn size="1.2rem" className="bukka-icons mr-10 bukka-color"/>
                  {restaurant.address}
                </p>
                <p className="mt-10 mb-10 icon-para">
                  <IoMdRestaurant size="1.2rem" className="bukka-icons mr-10 bukka-color" />
                  {restaurant.restauranttype}
                </p>
                <p className="mb-10 icon-para">
                  <GiMoneyStack size="1.2rem" className="bukka-icons mr-10 bukka-color" />
                  From {restaurant.averagecost}
                </p>
                <p className="inline-block mr-10 bukka-card-rating"><FcRating size="1.2rem" className="bukka-icons mr-10 bukka-color" />★★★★☆</p>
                <small className="inline-block bold bukka-card-rating">
                  {restaurant.reviews}
                </small>
              </section>
              <a className="bukka-card-button block center" href={`/restaurant/${restaurant.slug}`}>
                See More Details
              </a>
             </section>
          );
        })}
    </>
  );
};