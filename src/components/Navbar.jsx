import React from "react";
import { NavLink, Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light py-3 shadow-sm bg-white">
        <div class="container">
            <Link to="/" class="navbar-brand fw-bold text-black" >
              SPA MART
            </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/"
                  class="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/products" class="nav-link" href="#">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link" href="#">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link" href="#">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-2"/>
                Login
              </Link>
              <Link to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-2"></i>
                Register
              </Link>
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-2"></i>
                Cart (0)
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
