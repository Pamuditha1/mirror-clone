import React from "react";
import Button from "../components/common/Button";
import ImageContainer from "./common/ImageContainer";

function LookBanner() {
  return (
    <ImageContainer url="https://res.cloudinary.com/themirror/image/upload/v1/ecom/production/2021/11/11/05/18/40/defb430b-3857-4baf-bdec-532098cd77b8/TakeaCloserLook.jpg">
      <div className="container text-center">
        <div className="row">
          {" "}
          <h1 className="h1-look">Take a closer look</h1>
        </div>

        <div className="row mt-5 text-center">
          <div className="col-12">
            <Button
              className="ml-2 mr-2"
              white
              filled
              text="Experience Mirror"
              href="https://www.mirror.co/shop/mirror"
            />
            <Button
              className="ml-2 mr-2"
              white
              text="Explore Workouts"
              href="https://www.mirror.co/workouts"
            />
          </div>
        </div>
      </div>
    </ImageContainer>
  );
}

export default LookBanner;
