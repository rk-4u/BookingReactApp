import React from "react";
import "./Landing.css";
import Popup from "./PopUp";
import { useState } from "react";

const LandingPage = () => {
   
        const [isPopupOpen, setIsPopupOpen] = useState(false);
      
        const handleButtonClick = () => {
          setIsPopupOpen(true);
        };
      
        const closePopup = () => {
          setIsPopupOpen(false);
        };      
  return (
    <div className="wrapper">
      <div className="content">
        <h1> Hello ! </h1>
        <h3>
          Welcome to our salon slot booking website. We are delighted to offer
          you an easy and convenient way to book your appointments with our
          professional stylists. Explore our services, choose your preferred
          time, and secure your spot with just a few clicks. Enjoy a seamless
          and personalized salon experience!
        </h3>
        <button className="button" onClick={handleButtonClick}>Start Tour</button>
        {isPopupOpen && <Popup onClose={closePopup} />}
      </div>
    </div>
  );
};

export default LandingPage;
