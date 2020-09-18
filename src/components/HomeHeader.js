import React from 'react';

const HomeHeader = () => {
    return (
      <>
        <section className="home-header">
          <section className="search-section">
            <h1 className="block text-light">
              Search For Restaurants Near You, Any Day, Any Time
            </h1>
            <br />
            <h4 className="block text-light">
              With over 100,000 restaurants available in our platform, you're in good hands
            </h4>
            <br />
            <input
              type="search"
              name="restaurant-search"
              placeholder="Location, Area, City, Food, Drinks..."
              className="header-search"
            />
            {/* <input type="submit" value="Find Now" /> */}
            <button className="btn btn-outline-light btn-lg" type="submit">
              Find Now
            </button>
          </section>
        </section>
      </>
    );
}

export default HomeHeader;
