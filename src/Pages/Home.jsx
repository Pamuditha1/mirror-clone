import React from "react";
import DescribeBanner from "../Components/DescribeBanner";
import Video from "../Components/Video";
import VideoImage from "../Components/VideoImage";
import video1 from "../media/videos/2021HomepageLoopFinal_updated.mp4";

function Home() {
  return (
    <>
      <Video width="100%" url={video1} />
      <DescribeBanner />
      <VideoImage />
    </>
  );
}

export default Home;
