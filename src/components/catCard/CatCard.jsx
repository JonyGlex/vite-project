import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.css";

const CatCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design" className="link">
      <div className="catCard">
        <img src={item.img} alt="" className="catimg" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CatCard;
