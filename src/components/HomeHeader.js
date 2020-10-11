import React from 'react';

const HomeHeader = () => {
    return (
      <>
        <section className="home-header">
          <section className="search-section">
            <h1 className="block home-header-text">
              Search For Restaurants Near You, Any Day, Any Time
            </h1>
            <br />
            <h4 className="block home-header-text-2">
              With over 100,000 restaurants available in our platform, you're in
              good hands
            </h4>
            <br />
            <input 
              type="search"
              name="restaurant-search" 
              placeholder="Restaurants, Fried rice, Suya, Lagos, Palm wine, Suya, Sharwarma and more "
              className="header-search"
            />
            <button className="btn btn-outline-light btn-lg" type="submit">
              Find Now
            </button>
          </section>
        </section>
      </>
    );
}

export default HomeHeader;
