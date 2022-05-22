import React from "react";
import Modal from "../common/Modal";

function ServiceModal({ modal, handleOpenModal, handleCloseModal }) {
  return (
    <Modal
      overlayStyles={{
        backgroundColor: "rgba(100, 100, 100, 0.5)",
        backdropFilter: "blur(10px)",
      }}
      modalOpen={modal.open}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
    >
      <div
        className="container mt-5 mb-5 mr-5 ml-5 p-5"
        style={{ backgroundColor: "white", borderRadius: 50 }}
      >
        <div className="row">
          <h1 className="modal2-h1">{modal.title}</h1>
        </div>
        <div className="row">
          <p className="modal2-p">{modal.des}</p>
        </div>
      </div>
    </Modal>
  );
}

export default ServiceModal;
