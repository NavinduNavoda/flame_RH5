import React from "react";
import BannerBackground from "../Assets/home-page.png";
import Footer from "./Footer";

// import { FiArrowRight } from "react-icons/fi";

var sectionStyle = {
  backgroundImage: "url(" + "home-page.png" + ")",
  
};

const Home = (props) => {
  return (
    <div className="home-container" >
      <div class="absolute top-0 left-0 w-[100%] h-[90vh] bg-cover" style={sectionStyle}></div>
      <div className={`home-banner-container z-30 relative`}>
        <div className="home-text-section pt-[200px]">
          <h1 className="text-left text-[62px]">
            Find<br/>Your Passion
          </h1>
          <p className="text-left text-[16px] tracking-wide">
          What ever happened ,it doesn't matter. Find your path.
          </p>
          <div className="home-button">
            <li  className="secondary-button" onClick={()=>{props.setPage('signup')}}>
              Start Meeting
            </li>
            <li className="secondary-button-signup" onClick={()=>{props.setPage('signup')}}>
              SIGN UP 
            </li>
          </div>
          
          
        </div>

      </div>
    </div>
  );
};

export default Home;
