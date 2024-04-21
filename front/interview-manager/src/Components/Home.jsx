import React from "react";
import BannerBackground from "../Assets/home-page.png";

import Navbar from "./Navbar";
// import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" >
      <Navbar />
      <div class="home-background"></div>
      <div className="home-banner-container ">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Find<br/>Your Fashion
          </h1>
          <p className="primary-text">
          What ever happened ,it doesn't matter. Find your path.
          </p>
          <div className="home-button">
            <a href="" className="secondary-button">
              Start Meeting
            </a>
            <a href="" className="secondary-button-signup">
              SIGN UP 
            </a>
          </div>
          
          
        </div>

      </div>
    </div>
  );
};

export default Home;
