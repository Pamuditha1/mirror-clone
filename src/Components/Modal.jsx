import React from "react";
import ReactModal from "react-modal";
import "../styles/modal.css";

function Modal({ modalOpen, handleOpenModal, handleCloseModal }) {
  return (
    <ReactModal
      isOpen={modalOpen}
      className="container m-content"
      overlayElement={(props, contentElement) => (
        <div {...props}>{contentElement}</div>
      )}
    >
      <div className="frame">
        {" "}
        <button className="btn" onClick={handleCloseModal}>
          X
        </button>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/642372830?h=dab7b74863"
          width="906"
          height="511"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </ReactModal>
  );
}

export default Modal;
