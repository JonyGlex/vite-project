import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.css";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" className="gigimg" />
        <div className="infogig">
          <div className="user">
            <img src={item.pp} alt="" className="userimg" />
            <span>{item.username}</span>
          </div>
          <p className="descgig">{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" className="starimg" />
            <span className="starspan">{item.start}</span>
          </div>
        </div>
        <hr className="gighr" />
        <div className="detailsgig">
          <img src="./img/heart.png" alt="" className="detaimg" />
          <div className="pricegig">
            <span className="gigprice">STARTING AT</span>
            <h2 className="pricedesc">
              $ {item.price}
              <sup className="sup">99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
