import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button className="buttonsearch">Search</button>
          </div>
          <div className="popular">
            <span className="popfea">Popular:</span>
            <button className="buttonpopular">Web Design</button>
            <button className="buttonpopular">WordPress</button>
            <button className="buttonpopular">Logo Design</button>
            <button className="buttonpopular">AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" className="imgrigth" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
