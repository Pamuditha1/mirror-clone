import React, { useState } from "react";
import Banner2 from "../Components/Banner2";
import Banner1 from "../Components/Banner1";
import Video from "../Components/Video";
import VideoImage from "../Components/VideoImage";
import video1 from "../media/videos/2021HomepageLoopFinal_updated.mp4";
import Banner3 from "../Components/Banner3";
import Modal from "../Components/Modal";
import Sider from "../Components/Sider";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Video width="100%" url={video1} />
      <Banner1 />
      <VideoImage handleOpenModal={handleOpenModal} />
      <Banner2 />
      <Banner3 />
      <Sider />
      <Modal
        modalOpen={modalOpen}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}

export default Home;
