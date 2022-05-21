import React from "react";
import "../styles/services.css";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <img src={icon} alt="icon" className="card-img" />
        </div>
        <div className="row mt-5">
          <h4>{title}</h4>
        </div>
        <div className="row mt-3 ml-5 card-txt">
          <p className="card-des">{description}</p>
        </div>
        <div className="row">
          <span className="card-link">Learn more</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
