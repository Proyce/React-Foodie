import React from 'react'
import { Link } from 'react-router-dom'

const AreaCards = ({image,city,number}) => {
    return (
        <>
            {/* <section class="card bg-dark text-white">
                <img class="card-img" src={image} alt="card-img" area-img/>
                    <section class="card-img-overlay">
                        <h5 class="card-title">{city}</h5>
                        <p class="card-text">{number}</p>
                    </section>
            </section> */}

            <section class="">
                <Link to="">
                    <img alt="city-img" src={image} className="" />
                    <section className="">
                        <h5 className="">{city}</h5>
                        <p className="">{number}</p>
                    </section>
                </Link>
            </section>
        </>
    )
}

export default AreaCards;
