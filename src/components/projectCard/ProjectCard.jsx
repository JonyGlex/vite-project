import React from "react";
import "./projectCard.css";

function ProjectCard({ item }) {
  return (
    <div className="projectCard">
      <img src={item.img} alt="" className="projectimg" />
      <div className="info">
        <img src={item.pp} alt="" className="infoimg" />
        <div>
          <h2 className="texts">{item.cat}</h2>
          <span className="textt">{item.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
