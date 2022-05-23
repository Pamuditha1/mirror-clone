import React from "react";
import ServiceCard from "./cards/ServiceCard";

import services from "../data/services.json";

function ServicesCards({ handleOpenModal }) {
  return (
    <div className="row">
      {services.map(({ id, icon, title, description, modalDes }) => (
        <div key={id} className="col-3">
          <ServiceCard
            handleOpenModal={handleOpenModal}
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
