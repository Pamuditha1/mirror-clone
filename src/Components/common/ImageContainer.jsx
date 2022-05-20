import React from "react";
import "../../styles/image-container.css";

function ImageContainer({
  url,
  container = false,
  height = "100%",
  width = "100%",
  marginT = "100px",
  marginB = "100px",
  children,
}) {
  return (
    <div
      className={container ? "container" : ""}
      style={{
        height,
        marginTop: marginT,
        marginBottom: marginB,
        position: "relative",
        padding: 0,
      }}
    >
      <img width={width} src={url} alt="cover" />
      <div className="overlay-div">
        <div className="container px-0" style={{ height: "100%" }}>
          <div className="row p-5 content-dev">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
