import React, { useState } from "react";
import Banner2 from "../components/Banner2";
import Banner1 from "../components/Banner1";
import Video from "../components/Video";
import VideoImage from "../components/VideoImage";
import video1 from "../media/videos/2021HomepageLoopFinal_updated.mp4";
import Banner3 from "../components/Banner3";
import Modal from "../components/Modal";
import Sider from "../components/Sider";

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
