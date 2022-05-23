import React from "react";
import Modal from "../common/Modal";

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
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Modal>
  );
}

export default VideoModal;
