import React from 'react'
import Product from './Product';


const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="https://cdn.pixabay.com/photo/2021/10/20/04/15/shop-6725070__340.png" className="card-img" alt="Background" height= "550px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS </h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
            </div>
            <Product/>
        </div>
    );
}

export default Home