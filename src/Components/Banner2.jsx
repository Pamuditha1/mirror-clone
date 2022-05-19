import React from "react";
import "../styles/banner.css";
import Button from "./Button";

function Banner() {
  return (
    <div className="container con">
      <div className="row">
        <div className="col-12">
          <h2 className="text text-center">
            The largest library of workouts.   10,000+ classes on demand, 50+
            genres, and new live classes daily.
          </h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="text-center">
          <Button
            text="Explore Workouts"
            href="https://www.mirror.co/workouts"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
