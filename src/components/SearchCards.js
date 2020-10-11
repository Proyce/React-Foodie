import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";
import { Link } from "react-router-dom";


const SearchCards = ({ image, name, location, type, reviews, stars, price }) => {
    return (
        <>
        <section className="search-card">
            <Link to="/"><img className="search-card-img" alt="search-card-img" src={image} /></Link>
            <section>
                <section className="bukka-card-text ml-10 mr-10 mt-10 mb-10">
                        <Link to="/"> <h3 className="mb-10 search-card-header">{name}</h3></Link>
                    <p className="icon-para">
                        <MdLocationOn size="1.2rem" className="bukka-icons mr-10 bukka-color" />
                        {location}
                    </p>
                    <p className="mt-10 mb-10 icon-para">
                        <IoMdRestaurant size="1.2rem" className="bukka-icons mr-10 bukka-color" />
                        {type}
                    </p>
                    <p className="mb-10 icon-para">
                        <GiMoneyStack size="1.2rem" className="bukka-icons mr-10 bukka-color" />From {price}
                    </p>
                    <p className="inline-block mr-10 bukka-card-rating">{stars}</p>
                    <small className="inline-block bold bukka-card-rating">
                        {reviews}
                    </small>
                </section>
                
            </section>
        </section>
            
        </>
    )
}

export default SearchCards;
