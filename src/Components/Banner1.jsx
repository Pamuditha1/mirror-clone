import Button from "../components/common/Button";
import React from "react";
import logo from "../media/images/Group 24166.webp";
import "../styles/describe-banner.css";

function DescribeBanner() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12">
          <span>Brought to you by</span>
          {"  "}
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-7">
          <p>
            This is more than a mirror. It’s the ultimate smart home gym. With
            the most workout variety. That actually looks good in your home.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <Button
            filled
            text="Experience Mirror"
            href="https://www.mirror.co/shop/mirror"
          />
          <Button
            text="Explore Workouts"
            href="https://www.mirror.co/workouts"
          />
        </div>
      </div>
    </div>
  );
}

export default DescribeBanner;
