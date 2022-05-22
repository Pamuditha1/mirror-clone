import React from "react";
import Button from "../components/common/Button";
import BannerContainer from "./common/BannerContainer";
import "../styles/banner.css";

function WorkoutsBanner() {
  return (
    <BannerContainer>
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
    </BannerContainer>
  );
}

export default WorkoutsBanner;
