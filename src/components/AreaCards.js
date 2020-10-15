import React from 'react'
import { Link } from 'react-router-dom'

const AreaCards = ({cityUrl,image,city,number}) => {
    return (
        <>
            <section className="area-section">
                <Link to={cityUrl} style={{ textDecoration: 'none' }}>
                    <img alt="city-img" src={image} className="area-section-img" />
                    <section className="area-section-details">
                        <h5 className="">{city}</h5>
                        <p className="">{number}</p>
                    </section>
                </Link>
            </section>
        </>
    )
}

export default AreaCards;
