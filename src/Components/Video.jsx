import React from "react";
// import ReactPlayer from "react-player";

function Video({ width, url }) {
  return (
    <div className="mb-5">
      {/* <ReactPlayer
        // style={{ width: "100%", height: "auto" }}
        url={url}
        playing
        loop
        volume={0}
      /> */}
      <video width={width} autoPlay muted loop>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
