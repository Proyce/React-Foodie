import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchCards from '../components/SearchCards';
import foodImg from "../images/foodbukka-2.jpg";
import foodChaw from "../images/food-chaw.jpg";
import riceImg from "../images/nigerian-egg-fried-rice.jpg";

const Search = () => {
    return (
        <>
          <Navbar/>  

          <section className="search-card-container">
                <section className="search-card-wrapper">
                    <h3 className="search-header">Showing search results for Rice</h3>
                    <SearchCards
                        name="Doole Bukka Joint"
                        image={riceImg}
                        location="10 Oladipo Dunmoye Srt, Oke-Ira, off Ajah-Addoh Road, Lekki, Lagos"
                        reviews="508 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★☆☆"
                        type="Mama Put Bukka"
                        price="N300"
                    />
                    <SearchCards
                        name="Iya Tunde Bole Joint"
                        image={foodImg}
                        location="Lekki-Epe Expressway, 5th Roundabout Circle Mall, Ajah Lagos "
                        reviews="5000 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★☆☆"
                        type="Bole (Nigerian Roasted Plantain)"
                        price="N300"
                    />
                    <SearchCards
                        name="Chris Shawarma Place"
                        image={foodImg}
                        location="Shop C41, Lekki Mall, Ibeju Lekki Express, Lekki Lagos"
                        reviews="50 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★★★"
                        type="Sharwarma"
                        price="N1000"
                    />
                    <SearchCards
                        name="Dorinda Fast Food"
                        image={foodChaw}
                        location="H518, Road 3, Ikota Shopping Complex, Vgc, Lekki, Lagos "
                        reviews="30 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★★☆"
                        type="Fast Food"
                        price="N750"
                    />
                    <SearchCards
                        name="Doole Bukka Joint"
                        image={riceImg}
                        location="10 Oladipo Dunmoye Srt, Oke-Ira, off Ajah-Addoh Road, Lekki, Lagos"
                        reviews="508 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★☆☆"
                        type="Mama Put Bukka"
                        price="N300"
                    />
                    <SearchCards
                        name="Iya Tunde Bole Joint"
                        image={foodImg}
                        location="Lekki-Epe Expressway, 5th Roundabout Circle Mall, Ajah Lagos "
                        reviews="5000 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★☆☆"
                        type="Bole (Nigerian Roasted Plantain)"
                        price="N300"
                    />
                    <SearchCards
                        name="Chris Shawarma Place"
                        image={foodImg}
                        location="Shop C41, Lekki Mall, Ibeju Lekki Express, Lekki Lagos"
                        reviews="50 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★★★"
                        type="Sharwarma"
                        price="N1000"
                    />
                    <SearchCards
                        name="Dorinda Fast Food"
                        image={foodChaw}
                        location="H518, Road 3, Ikota Shopping Complex, Vgc, Lekki, Lagos "
                        reviews="30 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★★☆"
                        type="Fast Food"
                        price="N750"
                    />
                    <SearchCards
                        name="Doole Bukka Joint"
                        image={riceImg}
                        location="10 Oladipo Dunmoye Srt, Oke-Ira, off Ajah-Addoh Road, Lekki, Lagos"
                        reviews="508 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★☆☆"
                        type="Mama Put Bukka"
                        price="N300"
                    />
                    <SearchCards
                        name="Iya Tunde Bole Joint"
                        image={foodImg}
                        location="Lekki-Epe Expressway, 5th Roundabout Circle Mall, Ajah Lagos "
                        reviews="5000 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★☆☆"
                        type="Bole (Nigerian Roasted Plantain)"
                        price="N300"
                    />
                    <SearchCards
                        name="Chris Shawarma Place"
                        image={foodImg}
                        location="Shop C41, Lekki Mall, Ibeju Lekki Express, Lekki Lagos"
                        reviews="50 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★★★"
                        type="Sharwarma"
                        price="N1000"
                    />
                    <SearchCards
                        name="Dorinda Fast Food"
                        image={foodChaw}
                        location="H518, Road 3, Ikota Shopping Complex, Vgc, Lekki, Lagos "
                        reviews="30 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                        stars="★★★★☆"
                        type="Fast Food"
                        price="N750"
                    />
                </section>
                
          </section>
          <Footer/>
        </>
    )
}

export default Search;
