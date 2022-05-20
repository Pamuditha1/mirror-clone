import React from "react";
import BannerContainer from "./BannerContainer";
import Button from "./Button";

import "../../styles/banner-container.css";

function Banner({ subTitle, title, bText, bLink, bFilled }) {
  return (
    <BannerContainer>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <span className="sub-title">
              <i>{subTitle}</i>
            </span>
            <h2 className="title">{title}</h2>
            <div className="col-4 mt-4">
              {bText && <Button filled={bFilled} text={bText} href={bLink} />}
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
}

export default Banner;
