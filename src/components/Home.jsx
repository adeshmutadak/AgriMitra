import React from "react";
import carousel1 from "../components/images/1.jpg";
import carousel2 from "../components/images/2.jpg";
import carousel3 from "../components/images/3.jpg";

import Review from "./Reviews/Review";
import "./style.css"; // Make sure to import your CSS file
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleCaptions" data-slide-to={1} />
            <li data-target="#carouselExampleCaptions" data-slide-to={2} />
            <li data-target="#carouselExampleCaptions" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel1} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Find the best machine</h5>
                <h4>A lot of variants available</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Find the best machine</h5>
                <h4>A lot of variants available</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Best Services</h5>
                <h4>Full Functional Feedback System</h4>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev bg-transparent border-0"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next bg-transparent border-0"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
      <div className="reviews mt-5">
        <h1>What People Say About Us!</h1>
        <Review />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
