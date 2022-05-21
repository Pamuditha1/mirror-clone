import React from "react";
import "../../styles/video-container.css";

function VideoContainer({
  url,
  loop = true,
  container = false,
  contentFullWidth = false,
  width = "100%",
  marginT = "100px",
  marginB = "100px",
  handleEnded,
  children,
}) {
  return (
    <div
      className={container ? "container" : ""}
      style={{
        marginTop: marginT,
        marginBottom: marginB,
        position: "relative",
      }}
    >
      <video
        width={width}
        autoPlay
        muted
        loop={loop}
        src={url}
        onEnded={handleEnded ? () => handleEnded() : () => {}}
      />
      <div className="overlay-div-v">
        <div
          className={`px-0 ${contentFullWidth ? "" : "container"}`}
          style={{ height: "100%" }}
        >
          <div className="row content-dev-v">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
