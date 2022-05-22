import React from "react";
import ReactModal from "react-modal";
import "../styles/modal.css";

function Modal({ children, modalOpen, handleCloseModal, overlayStyles }) {
  return (
    <ReactModal
      style={{ overlay: overlayStyles }}
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
        {children}
      </div>
    </ReactModal>
  );
}

export default Modal;
