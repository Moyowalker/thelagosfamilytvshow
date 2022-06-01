import React from "react";
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                                The Lagos Family TV Show Definitely To Determine The Celebrity Family Of The Year.
                            </h1>
                            <p className="lead text-center fs-4 mb-5 text-white">
                            36 families battle it out on set for the ultimate price of 50 million Naira, a brand new SUV and bragging rights as the celebrity family of the year.
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Pay for Registration</NavLink>
                                <NavLink to="/service" className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;