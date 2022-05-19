import React from "react";
import "../../styles/banner-container.css";

function BannerContainer({ children }) {
  return <div className="container banner-container">{children}</div>;
}

export default BannerContainer;
