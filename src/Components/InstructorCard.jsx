import React from "react";
import "../Styles/card.css";

function InstructorCard({ image, name, description }) {
  return (
    <div className="container content">
      <div className="row">
        <img className="image" src={image} alt={name} />
      </div>
      <div className="row mt-3">
        <h3>{name}</h3>
        <p className="des">{description}</p>
      </div>
      ;
    </div>
  );
}

export default InstructorCard;
