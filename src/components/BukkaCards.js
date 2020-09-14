import React from 'react';

const BukkaCards = ({image,name,location,type,reviews,stars}) => {
    return (
        <>
            <section className="card card-deck bukka-card">
                <img className="card-img-top" src={image} alt="Card-img"/>
                    <section className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{location}</p>
                        <p className="card-text">{type}</p>
                    <p className="card-text">
                        <small className="text-muted bold">{reviews}</small>
                        <small className="text-muted">{stars}</small>
                    </p>
                        <a href="/" className="btn btn-danger card-btn text-center">See More</a>
                    </section>
            </section>
        </>
    );
}

export default BukkaCards;
