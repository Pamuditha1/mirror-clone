import React from "react";
import ServicesCards from "./ServicesCards";
import "../styles/services.css";

function Services({ handleOpenModal }) {
  return (
    <div className="container services-content">
      <div className="row text-center mt-5 mb-5">
        <h1>Bring it home risk-free</h1>
      </div>
      <ServicesCards handleOpenModal={handleOpenModal} />
    </div>
  );
}

export default Services;
