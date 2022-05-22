import React from "react";
import VideoContainer from "./common/VideoContainer";
import video from "../media/videos/starting-video.mp4";
import { BsChevronDown } from "react-icons/bs";
import "../styles/starting-video.css";

function StartingVideo() {
  const handleScroll = () => {
    window.scrollTo({
      top: 750,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <VideoContainer marginT="0px" url={video}>
      <div className="col-6">
        <small className="sub-text">MEET MIRROR</small>
        <h1 className="h1-text mt-5">Every workout. For everyone.</h1>
        <button onClick={handleScroll} className="explore-btn">
          <h6 className="explore">Explore</h6>
          <span>
            <BsChevronDown />
          </span>
        </button>
      </div>
    </VideoContainer>
  );
}

export default StartingVideo;
