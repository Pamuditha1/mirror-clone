import React from "react";

function VideoContainer({
  width = "100%",
  url,
  marginT = "100px",
  marginB = "100px",
}) {
  return (
    <div style={{ marginTop: marginT, marginBottom: marginB }}>
      <video width={width} autoPlay muted loop>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoContainer;
