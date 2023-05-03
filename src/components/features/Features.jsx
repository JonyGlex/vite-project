import React from "react";
import "./features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="containerfeatures">
        <div className="itemleft">
          <h1 className="titu">
            A whole world of freelance talent at your fingertips
          </h1>
          <div className="titlefe">
            <img src="./img/check.png" alt="" className="imgfe" />
            The best for every budget
          </div>
          <p className="descfea">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
          <div className="titlefe">
            <img src="./img/check.png" alt="" className="imgfe" />
            Quality work done quickly
          </div>
          <p className="descfea">
            Find the right freelancer to begin working on your project within
            minutes.
          </p>
          <div className="titlefe">
            <img src="./img/check.png" alt="" className="imgfe" />
            Protected payments, every time
          </div>
          <p className="descfea">
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </p>
          <div className="titlefe">
            <img src="./img/check.png" alt="" className="imgfe" />
            24/7 support
          </div>
          <p className="descfea">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
        </div>
        <div className="itemrigth">
          <video src="./img/vid.mp4" controls />
        </div>
      </div>
    </div>
  );
};

export default Features;
