import React from "react";
import Modal from "./Modal";

function VideoModal({ modalOpen, handleOpenModal, handleCloseModal }) {
  return (
    <Modal
      modalOpen={modalOpen}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
    >
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/642372830?h=dab7b74863"
        width="906"
        height="511"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </Modal>
  );
}

export default VideoModal;
