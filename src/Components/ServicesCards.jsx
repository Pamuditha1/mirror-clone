import React from "react";
import ServiceCard from "./cards/ServiceCard";

import services from "../data/services.json";

function ServicesCards({ handleOpenModal }) {
  return (
    <div className="row">
      {services.map(({ id, icon, title, description, modalDes }) => (
        <div className="col-3">
          {" "}
          <ServiceCard
            handleOpenModal={handleOpenModal}
            key={id}
            icon={icon}
            title={title}
            description={description}
            modalDes={modalDes}
          />
        </div>
      ))}
    </div>
  );
}

export default ServicesCards;
