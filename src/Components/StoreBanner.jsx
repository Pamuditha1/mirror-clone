import React from "react";
import logo from "../media/images/lululemon-logo.webp";
import Button from "../components/common/Button";
import ImageContainer from "./common/ImageContainer";

function StoreBanner() {
  return (
    <ImageContainer
      container
      url="https://res.cloudinary.com/themirror/w_1600,c_scale,f_auto,q_auto/ecom/production/2021/11/11/05/21/48/5f590cb1-3aa0-4ad3-b60f-5b2b3aa5dc3e/TakeItForASpin.jpg"
    >
      <div className="blur-div">
        <div
          className="container row"
          style={{ height: "100%", alignItems: "center", padding: 50 }}
        >
          <div className="col-5">
            <div className="container content-dev">
              <span className="img-text">Only at</span>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-3">
            <h5 className="blur-h5">Take it for a spin</h5>
            <p className="blur-p">Find a demo nearby and</p>
            <p className="blur-p">try a sample workout.</p>
          </div>
          <div className="col-4 text-center">
            <Button
              className="ml-2 mr-2"
              white
              text="Find a Store"
              href="https://www.mirror.co/showroom"
            />
          </div>
        </div>
      </div>
    </ImageContainer>
  );
}

export default StoreBanner;
