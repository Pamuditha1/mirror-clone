import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/themirror/image/upload/v1/ecom/production/2021/11/11/05/17/45/10cd72a9-52cc-4d0e-af64-339b7ebc3982/trial-icon-1.svg",
    title: "Try The Mirror for 30 days",
    description:
      "Enjoy unlimited live and on-demand workouts risk-free for 30 days.",
    modalDes:
      "With our 30-Day Risk-Free Trial, if you are not satisfied with your Mirror, you can return it for a replacement or refund within 30 days of installation. Any gifts received with the Mirror, including the Starter Pack and Care Kit, must also be returned. With our Risk-Free Trial returns are free and easy!",
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/themirror/image/upload/v1/ecom/production/2021/11/11/05/17/57/81630220-4558-4132-a1f4-5489079f2c26/trial-icon-2.svg",
    title: "Free delivery & installation",
    description:
      "We’ll deliver and professionally install your Mirror at no extra cost.",
    modalDes:
      "Orders placed today will be delivered & installed on average within 7-14 business days (although some orders may be delivered sooner). Within 4 business days of purchase, you’ll be contacted to schedule delivery & installation. While you await your Mirror delivery, you can enjoy access to our full workout library via the MIRROR App. Your Membership charges ($39/mo.), 30-day Risk Free Trial and Standard Warranty will automatically begin when your Mirror is delivered. Should you wish to forego installation services, you may let our logistics partner know when they contact you and they will provide threshold delivery instead.",
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/themirror/image/upload/v1/ecom/production/2021/11/11/05/18/08/3e8786c3-22e5-473c-b450-2d49312f22b7/trial-icon-3.svg",
    title: "Standard warranty",
    description:
      "It’s covered for one year, or choose an extended protection plan.",
    modalDes:
      "Your Mirror purchase comes with a one-year standard warranty. In the event that your Mirror needs repair, we'll provide a replacement Mirror or send our partner to service your Mirror, available anywhere in the contiguous United States. Plus, we’ve partnered with Mulberry to offer a best-in-class Extended Protection Plan! Mulberry offers 2, 3, and 5-year plans and provides 24/7 customer support, free repairs and replacement, and a one-click, claims filing process that does not require a receipt. You will have the option to purchase an Extended Protection Plan anytime between the time of your Mirror purchase and 30 days post-Mirror installation.",
  },
  {
    id: 4,
    icon: "https://res.cloudinary.com/themirror/image/upload/v1/ecom/production/2021/11/11/05/18/20/67ff8aa4-65ef-4e36-bde4-80fed122fe69/trial-icon-4.svg",
    title: "Fixed monthly payments",
    description:
      "Split your purchase into 12, 24, or 48 monthly payments with as low as $0 down and 0% APR.",
  },
];

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
