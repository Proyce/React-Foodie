import React from 'react'
import "./Flexcards.css"

const Flexcard = () => {
    return (
      <>
          <section className="card-container">
            <section className="card">
              <img alt="card-img" src="./images/lagos-ng.jpg" />
              <section className="card-text ml-10 mr-10 mt-10 mb-10">
                <h3 className="center mb-10 card-header">Iya Basira Restaurant</h3>
                <p>
                  <i className="fa fa-map-marker mr-10" style={{color: "gray"}}></i>No
                  1, Signboard bus stop, Addo-Badore Road, Ajah, Lagos.
                </p>
                <p className="mt-10 mb-10">
                  <i className="fa fa-cutlery mr-10" style={{color: "gray"}}></i>Bukka
                </p>
                <p className="mb-10">
                  <i className="fa fa-money color mr-10" style={{color: "gray"}}></i>
                  From N500
                </p>
                <p className="inline-block mr-10 card-rating">★★★★☆</p>
                <small className="inline-block bold card-rating">
                  8765 reviews
                </small>
              </section>
              <a className="button block center" href="/">
                See More Details
              </a>
            </section>
          </section>
      </>
    );
}

export default Flexcard;
