import React, {useState} from 'react';

const HomeHeader = (props) => {
  const [entry, setEntry] = useState(props.entry || "");

  function submitSearch(e) {
    if(typeof props.search === "function"){
      props.search(entry);
    }
    console.log(entry);
    e.preventDefault();
  }
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
            <form onSubmit={submitSearch}>
              <input 
              onChange= {(e) => setEntry(e.target.value)}
              type="search"
              name="restaurant-search" 
              placeholder="Restaurants, Fried rice, Suya, Lagos, Palm wine, Suya, Sharwarma and more "
              className="header-search"
            />
            <button className="btn btn-outline-light btn-lg" type="submit">
              Find Now
            </button>
            </form>
          </section>
        </section>
      </>
    );
}

export default HomeHeader;
