import React from "react";
import Logo from "../Assets/Logo.svg";
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
        Streamline candidate assessment with structured interviews, score tracking, and feedback collection. Optimize hiring decisions.
        </div>
        <div className="footer-icons">
          {/* <a className="footer-list" href=""></a> */}
          <a className="footer-list"href="">Community</a>
          {/* <a className="footer-list" href="">Friends</a> */}
          <a className="footer-list" href="">Contact us </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns-left">
          © 2024 Flame. All rights reserved.
        </div>
        <div className="footer-section-columns-right">
          <a className="footer-list" href="">Terms of Service</a>
          <a className="footer-list" href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
