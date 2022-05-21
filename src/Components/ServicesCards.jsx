import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/themirror/image/upload/v1/ecom/production/2021/11/11/05/17/45/10cd72a9-52cc-4d0e-af64-339b7ebc3982/trial-icon-1.svg",
    title: "Try The Mirror for 30 days",
    description:
      "Enjoy unlimited live and on-demand workouts risk-free for 30 days.",
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/themirror/image/upload/v1/ecom/production/2021/11/11/05/17/57/81630220-4558-4132-a1f4-5489079f2c26/trial-icon-2.svg",
    title: "Free delivery & installation",
    description:
      "We’ll deliver and professionally install your Mirror at no extra cost.",
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/themirror/image/upload/v1/ecom/production/2021/11/11/05/18/08/3e8786c3-22e5-473c-b450-2d49312f22b7/trial-icon-3.svg",
    title: "Standard warranty",
    description:
      "It’s covered for one year, or choose an extended protection plan.",
  },
  {
    id: 4,
    icon: "https://res.cloudinary.com/themirror/image/upload/v1/ecom/production/2021/11/11/05/18/20/67ff8aa4-65ef-4e36-bde4-80fed122fe69/trial-icon-4.svg",
    title: "Fixed monthly payments",
    description:
      "Split your purchase into 12, 24, or 48 monthly payments with as low as $0 down and 0% APR.",
  },
];

function ServicesCards() {
  return (
    <div className="row">
      {services.map(({ id, icon, title, description }) => (
        <div className="col-3">
          {" "}
          <ServiceCard
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        </div>
      ))}
    </div>
  );
}

export default ServicesCards;
