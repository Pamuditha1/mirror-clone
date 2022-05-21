import React from "react";
import ImageContainer from "./common/ImageContainer";
import "../styles/membership-banner.css";

function MembershipBanner() {
  return (
    <ImageContainer
      contentFullWidth
      height="600px"
      url="https://res.cloudinary.com/themirror/image/upload/v1/ecom/production/2021/11/11/05/37/24/ff5bb8f9-b0c4-4aa9-a393-f040869eecaf/GymMembershipforFamily.jpg"
    >
      <div className="text-div-mem">
        <div className="text-mem">
          <h1 className="line">A gym membership for the whole family.</h1>
        </div>
      </div>
    </ImageContainer>
  );
}

export default MembershipBanner;
