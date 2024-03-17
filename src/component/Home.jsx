import React from "react";
import bg from "../assets/bg6.avif";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src={bg}
          height={'550px'}
          classname="card-img"
          alt="Background"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">

            </div>
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text leadS fs-2">
                CHECK OUT ALL THE TRENDS 
          </p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
