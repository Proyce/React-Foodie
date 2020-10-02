import React from "react";

const BukkaCards = ({ image, name, location, type, reviews, stars, price }) => {
  return (
    <>
      {/* <section className="card card-deck bukka-card">
          <img className="card-img-top" src={image} alt="Card-img" />
          <section className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{location}</p>
            <p className="card-text">{type}</p>
            <p className="card-text">
              <small className="text-muted bold">{reviews}</small>
              <small className="text-muted">{stars}</small>
            </p>
            <a href="/" className="btn btn-danger card-btn text-center">
              See More
            </a>
          </section>
        </section> */}

      <section className="bukka-card">
        <img alt="bukka-card-img" src={image} />
        <section className="bukka-card-text ml-10 mr-10 mt-10 mb-10">
          <h3 className="center mb-10 bukka-card-header">{name}</h3>
          <p>
            <i className="fa fa-map-marker mr-10" style={{ color: "gray" }}></i>
            {location}
          </p>
          <p className="mt-10 mb-10">
            <i className="fa fa-cutlery mr-10" style={{ color: "gray" }}></i>
            {type}
          </p>
          <p className="mb-10">
            <i
              className="fa fa-money color mr-10"
              style={{ color: "gray" }}
            ></i>
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
