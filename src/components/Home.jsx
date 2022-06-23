import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpeg"
          class="card-img"
          alt="hero_image"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">Black Friday Sales</h5>
            <p class="card-text lead fs-2">
              CHECK OUT OUR EXCITING OFFERS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
